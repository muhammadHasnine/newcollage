import React, { useState } from 'react'

const CategNav = ({handarti,hand2}) => {
 const [clksemester,setclksemester] =useState(false)
 const semes =()=>setclksemester(!clksemester)
 const [clkshift,setclkshift] =useState(false)
 const shif =()=>setclkshift(!clkshift)
  const semester = ["1st Semester","2nd Semester","3rd Semester","4th Semester","5th Semester","6th Semester","7th Semester","8th Semester",]
  const shift = ["1st","2nd"]
  // const session =["12-13","13-14","14-15","15-16","16-17","17-18","19-20","21-22","22-23"]
  return (
    <>

      <div className='arti_nava flex justify-around bg-[#6db700] rounded w-fit m-[30px_auto_10px] '>
        <p className='p-[15px] cursor-pointer font-semibold text-white' onClick={()=>handarti("All Students")}>All Students</p>
        <p className='p-[15px] cursor-pointer font-semibold text-white' onClick={semes}>Semester</p>
            
        
        <p className='p-[15px] cursor-pointer font-semibold text-white' onClick={shif}>Shift</p>
           
        
        {/* {session.map((c,b)=>{
          return <a className='p-[16px_32px] hover:bg-[#f7ecf1] hover:transition-[1s] ' key={b} onClick={()=>handarti(c)} >{c}</a>
        })} */}
       
      </div>
      <div className='flex gap-3 w-fit m-[0px_auto] '>
          <div className={clksemester ? "flex bg-[#6db700] text-white rounded" :"hidden"}>
                    {semester.map((c,b)=>{
                      return <p className=' p-[15px] cursor-pointer' key={b} onClick={()=>handarti(c)} >{c}</p>
                    })}
          </div>
          <div className={clkshift ? "flex bg-[#6db700] text-white rounded" :"hidden"}>
                    {shift.map((c,b)=>{
                      return <p className=' p-[15px] cursor-pointer ' key={b} onClick={()=>hand2(c)} >{c}</p>
                    })}
          </div>
      </div>
    </>
  )
}

export default CategNav