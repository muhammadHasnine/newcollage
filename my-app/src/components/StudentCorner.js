import React from 'react'
import {Link} from 'react-router-dom'
const StudentCorner = ({img,pagelink}) => {
  return (
    <>
    <Link to={pagelink}>
    <div className="stucorner max-w-[250px] p-[5px] border-lime-600 border-2 rounded-[5px] ">
        <img className='w-[100%] h-[100%] rounded-[5px]' src={img} alt="" />
    </div>
    </Link>
   
    </>
  )
}

export default StudentCorner