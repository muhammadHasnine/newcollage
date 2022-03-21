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
  // const [studata, setstudata] = useState([])
  const {id} = useParams()
    // useEffect(()=>{
    //     axios.get('http://localhost:3002/api/read').then((resposn)=>{
    //                 //     console.log(resposn.data[0])
    //                 // const postdata =resposn.data[0] 
    //                 // setname(postdata.studentName)
    //                 setstudata(resposn.data)

    //     })
    // },[])
    // const newarray = studata.filter(s=>s._id===id)
    // console.log("newarray",newarray)
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
            name,session,semester,gender,shift,roll,id
        }
        axios.put("http://localhost:3002/api/edit",data)
    }

  return (
    <>
    EditStudentData{id}
    {/* {newarray.map(r=><> */}
                <div className="container">
                    <input type="text" placeholder="Student Name" onChange={e=>setname(e.target.value)}/>
                    <input type="number" placeholder="Roll" onChange={e=>setroll(e.target.value)}/>
                    <input type="text" placeholder="Semester" onChange={e=>setsemester(e.target.value)}/>
                    <input type="text" placeholder="Shift" onChange={e=>setshift(e.target.value)}/>
                    <input type="text" placeholder="Session" onChange={e=>setsession(e.target.value)}/>
                    <input type="text" placeholder="Gender" onChange={e=>setgender(e.target.value)}/>
                    <button onClick={()=>editdata(id)}>Edit</button>
                </div>
    {/* </>)} */}
    
    </>
  )
}

export default EditStudentData