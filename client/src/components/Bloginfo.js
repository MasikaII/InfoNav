import React, { useEffect, useState } from "react";
import BlogHeader from "./BlogHeader";
import axios from "axios";
import UserBlogs from "./UserBlogs";

const BlogInfo = () => {
  const [user, setUser] = useState();
  const id = localStorage.getItem("userId");
  const sendRequest = async () => {
    const res = await axios.get(`http://localhost:7000/api/blog/user/${id}`)
      .catch(err => console.log(err))
    const data = await res.data;
    return data;
  }
  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
  }, []);
  console.log(user);
  return (
    <>
      <BlogHeader />
      <div>
        {user && user.blogs && user.blogs.map((blog, index) => (<UserBlogs
          id={blog._id}
          key={index}
          isUser={true}
          title={blog.title}
          description={blog.description}
          imageURL={blog.image}
          userName={user.name} />))}
      </div>
    </>
  );
};

export default BlogInfo;
