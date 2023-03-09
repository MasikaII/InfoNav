import React from 'react';
import './blog.css'
import BlogHeader from './BlogHeader';


const Blog = () => {
  return (
    <>
      <BlogHeader />
      <main>
        <header>
          <h1>BlogPost</h1>

        </header>
        <div className='post'>
          <div>
            <img src='https://imgs.search.brave.com/xsuicd2QpEbAlwzd4HtzWTlZE1ZgkCgE5qTVGGKGn54/rs:fit:702:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/U2ZwYWVCbE85ckJM/bFNta1NieUh3SGFG/QSZwaWQ9QXBp' alt='pimage' />
          </div>
          <div className='text'>
            <h2>Agricultural Mechanization</h2>
            <p className='info'>
              <a className='author'>Olamide Aliyu</a>
              <time>2023-01-06 17:25</time>
            </p>
            <p className='content'>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
          </div>
        </div>

      </main>
    </>
  );
}


export default Blog
