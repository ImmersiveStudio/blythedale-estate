import Header from '../../components/Header'
import Info from '../../components/Info'
import CTA from '../../components/CTA'
import Reservations from '../../components/Reservations'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'
import { sanityClient } from "../../sanity";
import { Post } from "../../typings";
import imageUrlBuilder from "@sanity/image-url";
import { GetStaticProps } from 'next'
import PortableText from 'react-portable-text';

interface Props {
    post: Post;
}

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}

function Post({ post }: Props) {
    console.log(post);
    return (
        <main>
            <Info />
            <Header />

            <Footer />

        </main>
    )
}

export default Post

export const getStaticPaths = async () => {
    const query = `
    *[_type == "post"] {
        _id,
        slug {
            current
        }
      }`

    const posts = await sanityClient.fetch(query);

    const paths = posts.map((post: Post) => ({
        params: {
            slug: post.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking',
    };

};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `*[_type == "post" && slug.current == $slug] [0] {
        _id,
        title,
        slug,
        author-> {
        name,
        image
      },
        description,
        mainImage,
        slug,
        category-> {
          title,
          description
        },
        date,
        minRead,
        body
      }`

    const post = await sanityClient.fetch(query, {
        slug: params?.slug
    });

    if (!post) {
        return {
            notFound: true
        };
    };

    return {
        props: {
            post,
        },
        revalidate: 14400, // after 4 hours, clear cache
    };
}