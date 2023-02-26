import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogPost from './BlogPost';
const HomeBlog = () => {
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@emranswe')
      .then(response => setPosts(response.data.items.slice(0, 3)))
      .catch(error => console.log(error));
  }, []);
    return (
        <div>
            <h1><h1 className='text-3xl text-center mt-5'>My <span className='textPrimary'>Recent</span>  Blogs</h1></h1>
           {
           posts.map(post => (<BlogPost key={BlogPost._id} post={post}></BlogPost>
           ))}  
        </div>
    );
};

export default HomeBlog;