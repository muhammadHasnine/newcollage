import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CategNav from '../components/CategoryNav'

const Studentdetails = () => {
    const thd = ["Student Name","Semester","Shift","Session","Gender","Result"]
    const {tech} = useParams()
    console.log(tech)
    const [studata, setstudata] = useState([])
    console.log("alldatas",studata)
  
    useEffect(()=>{
        axios.get('http://localhost:3002/api/read').then((resposn)=>{
                   return setstudata(resposn.data) 
                  
        })
    },[])

    const newarray = studata.filter((d)=>d.technology===tech)
    
    const deletedata =(idd)=>{
        axios.delete(`http://localhost:3002/api/delete/${idd}`)
    }

 
  return (
    <>

      <div className="container border-[1px] border-[#6db700] bg-gradient-to-t from-[#ededed] to-[#fefefe] rounded-[5px] max-w-[100%] md:max-w-[80%] m-[30px_0px] md:m-[30px_auto] p-[15px]">
            <div className="title bg-[#6db700] p-[10px] rounded-[5px_5px_0px_0px] text-center text-[white]">
                <p> {tech}  বিভাগের ছাত্র-ছাত্রী</p>
            </div>
            <div className="w-full">
                    <table className='table w-full'>
                        <thead className='bg-gradient-to-tl from-[#9cb8eb] to-[#f2eaf5] '>
                            <tr className=''>
                                {thd.map((v)=><th className='text-[14px] font-semibold tracking-[0.35px] text-white p-3'>{v}</th>)}
                                </tr>
                              
                        </thead>
                        <tbody className='bg-gradient-to-br from-[#9cb8eb] to-[#f2eaf5]'>
                           
                            {newarray.map((s)=>{
                                return <>
                                 <tr className=' mb-[20px] odd:bg-gradient-to-tr from-[#b4ee8e] to-[#f5f3f3]'>
                                <td data-label="Student Name " className=' text-[14px] tracking-[0.35px] font-normal text-[#2a2b2e] p-2 text-center '>{s.studentName}</td>
                                <td data-label="Semester" className=' text-[14px] tracking-[0.35px] font-normal text-[#2a2b2e] p-2 text-center'>{s.semester}</td>
                                <td data-label="Shift" className=' text-[14px] tracking-[0.35px] font-normal text-[#2a2b2e] p-2 text-center'>{s.shift}</td>
                                <td data-label="Session" className=' text-[14px] tracking-[0.35px] font-normal text-[#2a2b2e] p-2 text-center'>{s.session}</td>
                                <td data-label="Gender" className=' text-[14px] tracking-[0.35px] font-normal text-[#2a2b2e] p-2 text-center'>{s.gender}</td>
                                <td data-label="Point" className=' flex justify-around text-[14px] tracking-[0.35px] font-normal text-[#2a2b2e] p-2 text-center'> 
                                 {/* {s.gpa.map((d)=>{
                                    return <p>{d}</p>
                                    })} */}
                                <p>GPA:{s.gpa[0]}</p>
                                {s.gpa[1]===null ? null: <p>CGPA:{s.gpa[1]}</p>}</td>
                                {/* <td data-label="CGPA" className=' text-[14px] tracking-[0.35px] font-normal text-[#2a2b2e] p-2 text-center'>3.50</td> */}
                               
                                {/* <td data-label="Gender" className=' text-[14px] tracking-[0.35px] font-normal text-[#2a2b2e] p-2 text-center cursor-pointer ' onClick={()=>deletedata(s._id)}>&#x2717;</td> */}
                                </tr>
                                </>
                            })}
                        </tbody>
                        
                    </table>
                </div>
          </div>  
        
    </>
  )
}

export default Studentdetails