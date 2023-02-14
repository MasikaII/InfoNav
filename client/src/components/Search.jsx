import React from 'react'

function Search() {
  return (
    <div style={{
        width: '100%',
        // border: '1px solid #ccc',
        display: 'flex',
        justifyContent: 'center',
        marginBottom:'1rem'
    }}>
    <input type='text' placeholder='Search' className='nav_search' />
    </div>
  )
}

export default Search