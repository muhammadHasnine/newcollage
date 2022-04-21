import React, { useState } from 'react'


const TestProject = () => {
    let Links =[
        {name:"HOME",link:"/"},
        {name:"SERVICE",link:"/"},
        {name:"ABOUT",link:"/"},
        {name:"BLOG'S",link:"/"},
        {name:"CONTACT",link:"/"},
      ];
      let [open,setOpen]=useState(false);
      const handleClick = () => setOpen(!open);
    return (
      <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
        text-gray-800'>
          <span className='text-3xl  mr-1 pt-0'>
          &#169;
          </span>
          Designer
        </div>
        
        <div onClick={handleClick} className='text-2xl mb-1 absolute right-8 top-6 cursor-pointer md:hidden'>
        {open ? <p className='text-indigo-600 mt-[-9px] '>&#x2715;</p>:<p className='text-indigo-600 mt-[-9px] '>&#9776;</p>}
        </div>
    <div className={`flex md:flex md:items-center md:pb-0 pb-12 absolute md:static top-0  md:z-auto z-[2] left-0 w-full md:w-auto md:pl-0  transition-all duration-200 ease-in-out ${open ? 'right-[70px] ':'left-[-850px]'}`}>
    <ul className='w-[70%] bg-white md:flex pl-8 md:pl-0' >
          {
            Links.map(({name,link})=>(
              <li key={name} className='md:ml-8 text-xl md:my-0 my-7 '>
                <a href={link} className='text-gray-800 hover:text-gray-400 duration-500'>{name}</a>
              </li>
            ))
          }
          {/* <Button>
            Get Started
          </Button> */}
        </ul>
        <div
                onClick={handleClick}
                className="w-[30%] h-[100vh] blur_div bg-[#6b0ae923] opacity-25 md:hidden"
              ></div>
    </div>
       
        </div>
      </div>
    )
}

export default TestProject