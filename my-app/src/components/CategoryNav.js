import React from 'react'

const categNav = ({handarti}) => {
  const cat_array = ["All Students","1st semester","shift","session","gender"]

  return (
    <>

      <div className='arti_nava list-none flex  md:m-[20px_auto] m-[0px_auto] cursor-pointer p-4 w-[90%]  rounded-[5px] shadow-[0px_0px_3px_1px_#e5e5e5] '>
        {cat_array.map((c,b)=>{
          return <a className='p-[16px_32px] hover:bg-[#f7ecf1] hover:transition-[1s] ' key={b} onClick={()=>handarti(c)} >{c}</a>
        })}
      </div>
    </>
  )
}

export default categNav