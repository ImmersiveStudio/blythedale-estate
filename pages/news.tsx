import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Info from '../components/Info'
import CTA from '../components/CTA'
import Reservations from '../components/Reservations'
import Newsletter from '../components/Newsletter'
import { sanityClient } from "../sanity";
import { Post } from "../typings";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";

interface Props {
  posts: [Post];
}

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}


function news({ posts }: Props) {
  console.log(posts);
  return (
    <div>
      <Info />
      <Header />
      <div className="header-strip"></div>
      <div className="blog-section">

        {/* Blog Posts */}
        <div className="blog-box">
          {posts.map((post) => (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="blog-post-container">
                <div className="blog-post-wrapper">
                  <div className="blog-post-content">
                    {/* Author Image + Title */}
                    <div className="author-container">
                      <div className="author-wrapper">
                        <Link href="/">
                          <div className="author-content">

                            <div className="overlay"></div>
                          </div>
                        </Link>
                        <a href="#">
                          <img
                            src={urlFor(post.mainImage).url()!}
                            className="blog-cover-image"
                          />
                        </a>
                        {/* <div className="name-container">
                          <div className="name-wrapper">
                            <div>
                              <Link href="/">
                                <div className="">
                                  <h4 className="author-name">
                                    {post.author.name}
                                  </h4>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>

                    {/* Blog Title */}
                    <a className="post-title" href="/">
                      <h2 className="post-title">{post.title}</h2>
                      <div className="description-wrapper">
                        <h3 className="post-description">
                          {post.description}
                        </h3>
                      </div>
                    </a>

                    {/* Blog Details */}
                    <div className="blog-details-wrapper">
                      {/* Blog date */}
                      <div className="date-container">
                        <span>
                          <span className="date-span">{post.date}</span>
                        </span>
                      </div>
                      {/* Blog Category */}
                    </div>
                  </div>
                </div>
                {/* <img src={urlFor(post.mainImage).url()!} alt="" /> */}
                {/* <div className="flex justify-between p-5 bg-white">
                              <div>
                              <p>{post.title}</p>
                              <p>
                              {post.description} by {post.author.name}
                              </p>
                            </div>
                            </div> */
                }
              </div>
            </Link>
          ))}
        </div>

      </div>
      <Newsletter />
      <Footer />
    </div>
  )
}
export const getServerSideProps = async () => {
  const query = `
  *[_type == "post"] {
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
    minRead
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};

export default news