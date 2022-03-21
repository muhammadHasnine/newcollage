import React from 'react'

const categNav = ({handarti,hand2}) => {
  const semester = ["1st Semester","2nd Semester","3rd Semester","4th Semester","5th Semester","6th Semester","7th Semester","8th Semester",]
  const shift = ["1st","2nd"]
  // const session =["12-13","13-14","14-15","15-16","16-17","17-18","19-20","21-22","22-23"]
  return (
    <>

      <div className='arti_nava list-none flex  md:m-[20px_auto] m-[0px_auto] cursor-pointer p-4 w-[80%]  rounded-[5px] shadow-[0px_0px_3px_1px_#e5e5e5] '>
      <a className='p-[10px] hover:bg-[#f7ecf1] hover:transition-[1s]' onClick={()=>handarti("All Students")}>All Students</a>
        {semester.map((c,b)=>{
          return <a className='p-[10px] hover:bg-[#f7ecf1] hover:transition-[1s] ' key={b} onClick={()=>handarti(c)} >{c}</a>
        })}
        {shift.map((c,b)=>{
          return <a className='p-[10px] hover:bg-[#f7ecf1] hover:transition-[1s] ' key={b} onClick={()=>hand2(c)} >{c}</a>
        })}
        {/* {session.map((c,b)=>{
          return <a className='p-[16px_32px] hover:bg-[#f7ecf1] hover:transition-[1s] ' key={b} onClick={()=>handarti(c)} >{c}</a>
        })} */}
       
      </div>
    </>
  )
}

export default categNav