import { useEffect, useState } from 'react';
import { getPosts as getPostsApi } from '../controllers/posts.controller';

type IPosts = {
    posts: { [key: string]: any }[];
    getPostById(id: string): { [key: string]: any };
};

export const usePosts = (): IPosts => {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getPostsApi();
                setPosts(res);
            } catch (error) {
                throw new Error(error);
            }
        };
        fetchData();
    }, []);

    const getPostById = (id: string) => {
        const founded = posts.find((post) => post.id === id);

        return founded;
    };

    return { posts, getPostById };
};
