import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="nav_container bg-[#8b74e0] flex-col md:flex justify-between">
      <p>Navbar</p>
      
      <ul className='flex-col md:flex'>
        <li>Home</li>
        <li>Articles</li>
        <li>Videos</li>
        <li>Books</li>
      </ul>
    </div>
    </>
  )
}

export default Navbar