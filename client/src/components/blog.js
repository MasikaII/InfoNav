import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import './blog.css'
import BlogHeader from './BlogHeader';
import axios from 'axios';
import UserBlogs from './UserBlogs';

const Blog = () => {
  const [blogs, setBlogs] = useState();
  const sendRequest = async () => {
    const res = await axios.get("http://localhost:7000/api/blog")
      .catch(err => console.log(err));
    const data = await res.data;
    return data;
  }
  useEffect(() => {
    sendRequest()
      .then((data) => setBlogs(data.blogs));
  }, []);
  console.log(blogs);
  return (
    <>
      <div>
        <BlogHeader />
        {blogs && blogs.map((blog, index) => (<UserBlogs
          id={blog._id}
          isUser={localStorage.getItem("userId") === blog.user._id}
          title={blog.title}
          description={blog.description}
          imageURL={blog.image}
          userName={blog.user.name} />))}
      </div>
    </>
  );
}


export default Blog
