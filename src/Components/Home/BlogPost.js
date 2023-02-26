import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ post }) => {
    const { author, description, title, thumbnail, link, pubDate } = post;
    return (
        <div className='hero'>
            <div class="lg:p-4 card lg:card-side ">
                <figure><img class="h-46 w-96 rounded-lg shadow-2xl" src={thumbnail} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{title}</h2>
                    <p><span className='text-sm'>{description.slice(0,250)+` ...`}</span><a href={link} rel="noreferrer" target='_blank'><span className='text-yellow-900'>read more</span> </a>
                    <p> Author:<span className='text-l font-bold'> {author}</span> <br />
                    <p> Published:<span className='text-sm'> {pubDate}</span></p></p>
                    <br />
                    <button class="btn btn-primary"><Link to='/blogs'>All Blog</Link></button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;