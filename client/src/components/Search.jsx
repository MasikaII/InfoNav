import React from 'react'

function Search() {
  return (
    <div style={{
        width: '100%',
        height: '1rem',
        padding:'1.5rem',
    }}>
    <input type='text' placeholder='Search' className='nav_search' style={{marginLeft:'5rem',
    color:'black',
  }} />
    </div>
  )
}

export default Search