import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import SingleBlogs from './SingleBlogs';

const Blogs = () => {
    const { data: blog, isLoading } = useQuery('blog', () => fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@emranswe').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const blogs = blog.items
    return (
        <div>
            <h1 className='text-3xl text-center my-5'>My <span className='textPrimary'>Recent</span>  Blogs</h1>
           
            <div className='grid lg:grid-cols-3 md:grid-cols-2 
            sm:grid-cols-1 justify-items-center '>
                {
                    blogs?.map(blog => <SingleBlogs key={blog._id} blog={blog}></SingleBlogs>)
                }
            </div>
        </div>
    );
};

export default Blogs;