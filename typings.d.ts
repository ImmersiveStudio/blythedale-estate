export interface Post {
    _id: string;
    _createdAt: string;
    title: string;
    author: {
        name: string;
        image: string;
    },
    description: string;
    categories: {
        title: string;
        description: string;
    };
    mainImage: {
        asset: {
            url: string;
        };
    };
    slug: {
        current: string;
    };
    date: string;
    minRead: string;
    body: [object];
}