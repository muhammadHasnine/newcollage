import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'


const DetailofStudent = () => {
    const ssemester = [
        "1st Semester",
        "2nd Semester",
        "3rd Semester",
        "4th Semester",
        "5th Semester",
        "6th Semester",
        "7th Semester",
        "8th Semester",
      ];
    const {id} = useParams()
    const [studata, setstudata] = useState([])
    useEffect(()=>{
            axios.get('http://localhost:3002/api/read').then((resposn)=>{   
                        setstudata(resposn.data)
            })
        },[])
        const newdata = studata.filter(f=>f._id===id)
  return (
    <>
    {newdata.map((c)=>{
        return(
            <div className="container grid gap-3 grid-cols-2 grid-rows-2 border-[1px] border-[#6db700] bg-gradient-to-t from-[#ededed] to-[#fefefe] rounded-[5px] max-w-[90%] md:max-w-[60%] m-[100px_auto] p-4">
                    <div className="col-span-2 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3  md:p-6">
                        <div className="img w-full m-[0px_auto] md:max-w-[250px]  h-[376px] md:h-fit">
                            <img className='w-full h-full ' src={c.imgurl} alt={`photo of ${c.studentName}`}/>
                        </div>
                       
                    </div>
                    <div className="info p-5 leading-8 col-span-2 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 ">
                        <p className='text-xl font-semibold '>Name:<span className='ml-5'>{c.studentName}</span></p>
                        <p className=' font-semibold mt-3'>Roll:<span className='ml-[50px]'>{c.roll}</span></p>
                        <p className=' font-semibold mt-3'>Semester:<span className='ml-2'>{c.semester}</span></p>
                        <p className=' font-semibold mt-3'>Shift:<span className='ml-[42px]'>{c.shift}</span></p>
                        <p className=' font-semibold mt-3'>Gender:<span className='ml-[22px]'>{c.gender}</span></p>
                        <p className=' font-semibold mt-3'>GPA:<span className='ml-[45px]'>{c.gpa[0]}</span></p>
{c.gpa[1]===null ? null:<p className=' font-semibold mt-3'>CGPA:<span className='ml-[35px]'>{c.gpa[1]}</span></p>}
                        <p className='font-semibold mt-3'>Edit:<Link className='ml-[45px]' to={`/editstudata/${c._id}`}>&#9998;</Link></p>
                    </div>
                </div>
        )
    })}
    
    </>
  )
}

export default DetailofStudent