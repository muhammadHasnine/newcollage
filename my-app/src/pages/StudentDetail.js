import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CategNav from '../components/CategoryNav'
import { useSearch } from '../huck/useSearch'

const Studentdetails = () => {
    const thd = ["Student Name","Roll","Semester","Shift","Session","Gender","Result","Edit","Delete"]
    const {tech} = useParams()
    console.log(tech)
    const [studata, setstudata] = useState([])
    const [search, setsearch] = useState(null)
    const num = [1,2];
    console.log("alldatas",studata)
    const [stufilt, setstufilt] = useState([])
    const [all, setall] = useState([])
  
    useEffect(()=>{
        axios.get('http://localhost:3002/api/read').then((resposn)=>{
                    setstudata(resposn.data) 
                   
                  
        })
    },[])

    useEffect(()=>{
        const filterstudata = studata.filter((c)=>c.technology === tech) 
        setstufilt(filterstudata)
        setall(filterstudata) 
    },[studata])

    // const newarray = studata.filter((d)=>d.technology===tech)
    
    const handelarticale = (match) =>{
        console.log(match)
        if(match==='All Students'){
          return setall(stufilt);
        }
      
        else if(match === '1st Semester' || '2nd Semester' || '3rd Semester' || '4th Semester' || '5th Semester' || '6th Semester' || '7th Semester' || '8th Semester'){
            const newarray = stufilt.filter((nar)=>nar.semester===match)
            return setall(newarray)
        }
        // else{
        //     return setall(stufilt)
        // }
        
      }
      const handelcat =(efil)=>{
        // if(efil==='All Students'){
        //     return setall(stufilt);
        //   }
          if(efil === '1st' || '2nd'){
            const newarray = stufilt.filter((re)=>re.shift===efil)
            return setall(newarray)
        }
      }
    const deletedata =(idd)=>{
        axios.delete(`http://localhost:3002/api/delete/${idd}`)
    }

 
  return (
    <>
    <CategNav  handarti = {handelarticale} hand2 ={handelcat}/>
      <div className="container border-[1px] border-[#6db700] bg-gradient-to-t from-[#ededed] to-[#fefefe] rounded-[5px] max-w-[100%] md:max-w-[80%] m-[30px_0px] md:m-[30px_auto] p-[15px]">
            <div className="title flex justify-around bg-[#6db700] p-[10px] rounded-[5px_5px_0px_0px] text-center text-[white]">
                <p className=''> {tech}  বিভাগের ছাত্র-ছাত্রী</p>
                <input
            type="text"
            placeholder="Enter name to be searched"
            className="searchbar p-[3px] rounded-full  text-[red]"
            onChange={(e) =>setsearch(e.target.value)}
          />
            </div>
            <div className="w-full">
                    <table className='table w-full'>
                        <thead className='bg-gradient-to-tl from-[#9cb8eb] to-[#f2eaf5] '>
                            <tr className=''>
                                {thd.map((v)=><th className='text-[14px] font-semibold tracking-[0.35px] text-white p-3'>{v}</th>)}
                                </tr>
                              
                        </thead>
                        <tbody className='bg-gradient-to-br from-[#9cb8eb] to-[#f2eaf5]'>
                           
                            {useSearch(all,search,num).map((s)=>{
                                return <>
                                 <tr className=' mb-[20px] odd:bg-gradient-to-tr from-[#b4ee8e] to-[#f5f3f3]'>
                                <td data-label="Student Name " className=' text-[14px] tracking-[0.35px] font-normal text-[#2a2b2e] p-2 text-center '>{s.studentName}</td>
                                <td data-label="Roll " className=' text-[14px] tracking-[0.35px] font-normal text-[#2a2b2e] p-2 text-center '>{s.roll}</td>
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
                               
                               <td data-label="Edit" className=' text-[14px] tracking-[0.35px] font-normal text-[#2a2b2e] p-2 text-center cursor-pointer'> <Link to={`/editstudata/${s._id}`}>&#9998;</Link></td>
                             
                                
                             
                                <td data-label="Delete" className=' text-[14px] tracking-[0.35px] font-normal text-[#2a2b2e] p-2 text-center cursor-pointer ' onClick={()=>deletedata(s._id)}>&#x2717;</td>
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