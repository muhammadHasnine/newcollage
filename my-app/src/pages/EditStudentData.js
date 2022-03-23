import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const EditStudentData = () => {
  const [name, setname] = useState("");
  const [session, setsession] = useState("");
  const [semester, setsemester] = useState("");
  const [gender, setgender] = useState("");
  const [shift, setshift] = useState("");
  const [roll, setroll] = useState('');
  const [imgurl, setimgurl] = useState('');
  const {id} = useParams()
  const [studata, setstudata] = useState([])
  console.log("namedata",name)
 
    useEffect(()=>{
        axios.get('http://localhost:3002/api/read').then((resposn)=>{
                    //     console.log(resposn.data[0])
                    // const postdata =resposn.data[0] 
                    // setname(postdata.studentName)
                    setstudata(resposn.data)
                    
        })
    },[])
   
  const newarray = studata.filter(s=>s._id===id)
  console.log("newarray",newarray)
  //     setname(newarray.studentName)
    // const datas = newarray[0]
    // console.log("datas",datas)
    // useEffect(()=>{
    //     setname(datas.studentName)
    //     setroll(datas.roll)
    //     setsemester(datas.semester)
    //     setshift(datas.shift)
    //     setsession(datas.session)
    //     setgender(datas.gender)
    // },[datas])

    const editdata =(id)=>{
        const data ={
           name,roll,semester,session,shift,gender,id,imgurl
        }
        console.log(data)
        axios.put("http://localhost:3002/api/edit",data)
    alert("Information Updated")
      }

  return (
    <>
   <div className='bg-gradient-to-br h-[100vh] from-[#41c4ec] to-[#3cf3c5]'>
    {newarray.map(r=><>

                <div className="container flex flex-col  w-[50%] m-[0px_auto] p-8">
                    <input className=' p-2 border-[2px] outline-none border-[#918e8e] rounded' type="text" placeholder={r.studentName} onChange={e=>setname(e.target.value)}/>
                    <input className=' p-2 mt-2 border-[2px] outline-none border-[#918e8e] rounded' type="number" placeholder={r.roll} onChange={e=>setroll(e.target.value)}/>
                    <input className=' p-2 mt-2 border-[2px] outline-none border-[#918e8e] rounded' type="text" placeholder={r.semester} onChange={e=>setsemester(e.target.value)}/>
                    <input className=' p-2 mt-2 border-[2px] outline-none border-[#918e8e] rounded' type="text" placeholder={r.shift} onChange={e=>setshift(e.target.value)}/>
                    <input className=' p-2 mt-2 border-[2px] outline-none border-[#918e8e] rounded' type="text" placeholder={r.session} onChange={e=>setsession(e.target.value)}/>
                    <input className=' p-2 mt-2 border-[2px] outline-none border-[#918e8e] rounded' type="text" placeholder={r.gender} onChange={e=>setgender(e.target.value)}/>
                    <input className=' p-2 mt-2 border-[2px] outline-none border-[#918e8e] rounded' type="text" placeholder="imgurl" onChange={e=>setimgurl(e.target.value)}/>
                    <button className=' mt-2 text-white bg-[#3d76f0] p-3 m-[0px_auto] w-[20%] rounded-[10px]' onClick={()=>editdata(id)}>Update</button>
                </div>
    </>)}
    </div>
    </>
  )
}

export default EditStudentData