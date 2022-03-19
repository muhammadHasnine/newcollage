import React from 'react'

const NavBar = () => {
  return (
    <>
    <div className="navcontainer">
      <div className="subnav flex justify-between items-center bg-[#683091] p-[10px] w-[100%]">
        <div className="locandphone flex justify-between gap-[5px]">
          <div className="loc_img w-[30px] h-[25px]">
             <img className='w-[100%] h-[100%]' src="images/location.png" alt="location_icon" />
          </div>
          <p className='text-sm text-[#ffffff] font-bold '>খালিশপুর, খুলনা-৯০০০</p>
          <div className="tele_img w-[30px] h-[25px] flex">
             <img className='w-[100%] h-[100%]' src="images/telephone.png" alt="telephone_icon" />
          </div>
          <p className='text-sm text-[#ffffff] font-bold  '>+৮৮০৪১-৭৬২৩৫২</p>
          
        </div>
        <div className="country flex gap-1">
          <div className="bongo_img w-[40px] h-[30px]">
              <img className='w-[100%] h-[100%]' src="images/bangladesh.png" alt="bangladesh_country_icon" />
          </div>
          <div className="saudi_img w-[40px] h-[30px]">
              <img className='w-[100%] h-[100%]' src="images/saudi-arabia.png" alt="saudi_arabiaicon_country_icon" />
          </div>
          
        </div>
      </div>
      <div className="hero">
        <img className='w-[100%]' src="images/Slide-Image-Four.png" alt="kpi" />
      </div>
      <div className="navbar bg-[#6db700]">
        <ul className='flex'>
          <li className='cursor-pointer text-[#ffffff] font-bold border-white border-[0px_1px] p-[10px] text-sm w-[50px] h-[45px]'><img className='w-[100%] h-[100%]' src="images/PikPng.com_jessica-jung-png_4524641.png" alt="home_icon" /></li>
          <li className='cursor-pointer text-[#ffffff] font-bold border-white border-[0px_1px] p-[10px] text-sm'>আমাদের সম্পর্কে</li>
          <li className='cursor-pointer text-[#ffffff] font-bold border-white border-[0px_1px] p-[10px] text-sm'>টেকনোলজি</li>
          <li className='cursor-pointer text-[#ffffff] font-bold border-white border-[0px_1px] p-[10px] text-sm'>ক্লাশ রুটিন</li>
          <li className='cursor-pointer text-[#ffffff] font-bold border-white border-[0px_1px] p-[10px] text-sm'>রেজাল্ট</li>
          <li className='cursor-pointer text-[#ffffff] font-bold border-white border-[0px_1px] p-[10px] text-sm'>ডিজিটাল কনটেন্ট</li>
          <li className='cursor-pointer text-[#ffffff] font-bold border-white border-[0px_1px] p-[10px] text-sm'>ফটো গ্যালারি</li>
          <li className='cursor-pointer text-[#ffffff] font-bold border-white border-[0px_1px] p-[10px] text-sm'>NTVQF</li>
          <li className='cursor-pointer text-[#ffffff] font-bold border-white border-[0px_1px] p-[10px] text-sm'>একাডেমিক</li>
          <li className='cursor-pointer text-[#ffffff] font-bold border-white border-[0px_1px] p-[10px] text-sm'>যোগাযোগ</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default NavBar