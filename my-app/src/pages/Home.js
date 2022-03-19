import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import StudentCorner from '../components/StudentCorner'
const Home = () => {
    const link_ary =[
        "Civil",
        "Electrical",
        "Mechanical",
        "Power",
        "Electronics",
        "Computer",
        "ENVT",
        "IPCT",
        "Automobile",
        "RAC",
      ]
    const [compon, setcompon] = useState(false);
    const comp =()=>setcompon(!compon)
    const [click, setclick] = useState(false);
    const computer =()=>setclick(!click)
    const [semester, setsemester] = useState(false);
    const semes =()=>setsemester(!semester)
    const [shift, setshift] = useState(false);
    const shif=()=>setshift(!shift)
    const [gender, setgender] = useState(false);
    const gen=()=>setgender(!gender)
  return (
    <>
    <div className='flex w-[50%] m-[30px_auto] gap-3'>
    <div className='w-fit' >
    <StudentCorner img={"images/student-corner.png"} pagelink={"/stregis"} />
    </div>
        
        <div className="right_menu w-[250px]" onClick={comp}>
            <StudentCorner className='menu_bar' img={"https://mechomotive.com/wp-content/uploads/2021/07/Modren-Tech.jpg"} pagelink={"/"}/>
        </div>
            {/* <div className="drop_down hidden list-none cursor-pointer bg-gradient-to-t from-[#ffffff] to-[#ffc6c6] mb-[30px]"> */}
                {/* <Link to={`/studetail/${"Computer"}`}>
                    <li className='p-[10px] hover:bg-gradient-to-r from-[#daffda] to-[white] hover:text-[#333] hover:duration-1000 font-semibold text-[white]'>Computer</li>
                </Link>
                <Link to={`/studetail/${"Civil"}`}>
                <li className='p-[10px] hover:bg-gradient-to-r from-[#daffda] to-[white] hover:text-[#333] font-semibold text-[white] hover:duration-1000'>Civil</li>
                </Link>
                <Link to={`/studetail/${"Electrical"}`}>
                    <li className='p-[10px] hover:bg-gradient-to-r from-[#daffda] to-[white] hover:text-[#333] font-semibold text-[white] hover:duration-1000'>Electrical</li>
                </Link>
                <Link to={`/studetail/${"Electronics"}`}>
                    <li className='p-[10px] hover:bg-gradient-to-r from-[#daffda] to-[white] hover:text-[#333] font-semibold text-[white] hover:duration-1000'>Electronics</li>
                </Link>
                <Link to={`/studetail/${"Power"}`}>
                    <li className='p-[10px] hover:bg-gradient-to-r from-[#daffda] to-[white] hover:text-[#333] font-semibold text-[#686565] hover:duration-1000'>Power</li>
                </Link>
                <Link to={`/studetail/${"ENVT"}`}>
                    <li className='p-[10px] hover:bg-gradient-to-r from-[#daffda] to-[white] hover:text-[#333] font-semibold text-[#686565] hover:duration-1000'>ENVT</li>
                </Link>
                <Link to={`/studetail/${"IPCT"}`}>
                    <li className='p-[10px] hover:bg-gradient-to-r from-[#daffda] to-[white] hover:text-[#333] font-semibold text-[#686565] hover:duration-1000'>IPCT</li>
                </Link>
                <Link to={`/studetail/${"Automobile"}`}>
                    <li className='p-[10px] hover:bg-gradient-to-r from-[#daffda] to-[white] hover:text-[#333] font-semibold text-[#686565] hover:duration-1000'>Automobile</li>
                </Link> */}
                <div className={compon ? "block":"hidden"}>
                    <ul>
                        {link_ary.map((c)=>(
                            <Link to={`/studetail/${c}`}>
                                <li>{c}</li>
                            </Link>
                        ))}
                        {/* <li>Civil</li>
                        <li>Electrical</li>
                        <li>Mechanical</li>
                        <li>Power</li>
                        <li>Electronics</li>
                        <Link to={`/studetail/${"Computer"}`}>
                        <li>Computer</li>
                        </Link>
                        <li>ENVT</li>
                        <li>IPCT</li>
                        <li>Automobile</li>
                        <li></li> */}
                    </ul>
                
                  
                
                {/* </div> */}
               
            {/* </div> */}
        </div>
        </div>
    </>
  )
}

export default Home