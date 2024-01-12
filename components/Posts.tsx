import React from 'react'
import { fetchUserPosts } from '@/axios.config';
import { useQuery } from '@tanstack/react-query';
import Post from './Post';

function Posts() {
    const { isPending, isError, data, error } = useQuery({
        queryKey: ['newPost'],
        queryFn: fetchUserPosts,
    })

    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    console.log(data);
    return (
        <div className='w-full flex flex-col gap-4'>
            {data.map((post: any) => { return <Post key={post.id} caption={post.desc} mediaUrl={post.media_url} postDate={post.date} /> })}
        </div>
    )
}

export default Posts