import { useState } from 'react';
import React from 'react';
import Search from './Search'
import GoogleAuth from './GoogleAuth';

function Content() {
  const [blogs, setBlogs] = useState([
    { title: 'How I solved afids problem ', body: 'Our story started when we were introduced to the problems faced by farmers in Africa. Despite being the backbone of many African economies, farmers often struggle to access vital information, such as weather forecasts, market prices, and disease control methods. This lack of information leads to reduced yields, increased costs, and lower income for farmers. Inspired by this challenge, we decided to develop an AI-enhanced website that would provide farmers with the information they need to make informed decisions. We worked tirelessly to build a platform that could collect, analyze, and present data in a way that was easily accessible and understandable for farmers.', author: 'marion', id: 1 },
    { title: '10 ways to solve you weed problems', body: 'Our story started when we were introduced to the problems faced by farmers in Africa. Despite being the backbone of many African economies, farmers often struggle to access vital information, such as weather forecasts, market prices, and disease control methods. This lack of information leads to reduced yields, increased costs, and lower income for farmers. Inspired by this challenge, we decided to develop an AI-enhanced website that would provide farmers with the information they need to make informed decisions. We worked tirelessly to build a platform that could collect, analyze, and present data in a way that was easily accessible and understandable for farmers.', author: 'yoshi', id: 2 },
    { title: 'top tips Chick rearing', body: 'Our story started when we were introduced to the problems faced by farmers in Africa. Despite being the backbone of many African economies, farmers often struggle to access vital information, such as weather forecasts, market prices, and disease control methods. This lack of information leads to reduced yields, increased costs, and lower income for farmers. Inspired by this challenge, we decided to develop an AI-enhanced website that would provide farmers with the information they need to make informed decisions. We worked tirelessly to build a platform that could collect, analyze, and present data in a way that was easily accessible and understandable for farmers.', author: 'mario', id: 3 },
    { title: 'How I solved afids problem ', body: 'lorem ipsum...', author: 'marion', id: 1 },
    { title: '10 ways to solve you weed problems', body: 'Our story started when we were introduced to the problems faced by farmers in Africa. Despite being the backbone of many African economies, farmers often struggle to access vital information, such as weather forecasts, market prices, and disease control methods. This lack of information leads to reduced yields, increased costs, and lower income for farmers. Inspired by this challenge, we decided to develop an AI-enhanced website that would provide farmers with the information they need to make informed decisions. We worked tirelessly to build a platform that could collect, analyze, and present data in a way that was easily accessible and understandable for farmers.', author: 'yoshi', id: 2 },
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
    <div>
    <Search />
    <div className='content_section' style={{
      // border:'2px solid black'
    }}>
        <div style={{
          color: "black",
          width: "600px",
          margin: "40px auto",
          padding: "20rm",
          // border:'2px solid black'
          // backgroundColor: "yellow",
          // textAlign: 'center'
        }}>
          {blogs.map((blog, index) => (
            <div className="blog-preview" key={blog.id} >
            <div style={{ padding: '5rem',
          // border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '20px',
          margin: '0.5rem',
          // backgroundColor: 'rgb(29,11,5)',
          display: 'inline',

          }}>
              <h2>{blog.title}</h2>
              <p style={{
                color: 'green',
                alignItems: 'center',
              }}>Written by {blog.author}</p>
              <h3>{blog.body}</h3>
              </div>
            </div>
          ))}
        </div>
      
      </div>
    </div>
  )
}

export default Content;
