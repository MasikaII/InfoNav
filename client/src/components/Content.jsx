import { useState } from 'react';
import React from 'react';
import Search from './Search'

function Content() {
  const [blogs, setBlogs] = useState([
    { title: 'How I solved afids problem ', body: 'lorem ipsum...', author: 'marion', id: 1 },
    { title: '10 ways to solve you weed problems', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'top tips Chick rearing', body: 'lorem ipsum...', author: 'mario', id: 3 },
    { title: 'How I solved afids problem ', body: 'lorem ipsum...', author: 'marion', id: 1 },
    { title: '10 ways to solve you weed problems', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'top tips Chick rearing', body: 'lorem ipsum...', author: 'mario', id: 3 },
    { title: '10 ways to solve you weed problems', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'top tips Chick rearing', body: 'lorem ipsum...', author: 'mario', id: 3 },
    { title: 'How I solved afids problem ', body: 'lorem ipsum...', author: 'marion', id: 1 },
    { title: '10 ways to solve you weed problems', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'top tips Chick rearing', body: 'lorem ipsum...', author: 'mario', id: 3 },
    { title: '10 ways to solve you weed problems', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'top tips Chick rearing', body: 'lorem ipsum...', author: 'mario', id: 3 },
    { title: 'How I solved afids problem ', body: 'lorem ipsum...', author: 'marion', id: 1 },
    { title: '10 ways to solve you weed problems', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'top tips Chick rearing', body: 'lorem ipsum...', author: 'mario', id: 3 },
    { title: '10 ways to solve you weed problems', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'top tips Chick rearing', body: 'lorem ipsum...', author: 'mario', id: 3 },
    { title: 'How I solved afids problem ', body: 'lorem ipsum...', author: 'marion', id: 1 },
    { title: '10 ways to solve you weed problems', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'top tips Chick rearing', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);

  return (
    <>
      <div className='content_section'>
        <div style={{
          color: "white",
          width: "600px",
          margin: "40px auto",
          padding: "20px",
          alignContent: 'center',
        }}>
          {blogs.map((blog, index) => (
            <div className="blog-preview" key={blog.id} >
              <h2>{blog.title}</h2>
              <p style={{
                color: 'green'
              }}>Written by {blog.author}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Content;
