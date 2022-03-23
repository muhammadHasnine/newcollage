import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import StuRegistation from './pages/StuRegistation';
import Home from './pages/Home';
import StudentDetail from './pages/StudentDetail';
import Login from './components/Login';
import EditStudentData from './pages/EditStudentData';
import DetailofStudent from './pages/DetailofStudent';


const App = () => {
  // const authh = false;
  const [ti, setti] = useState('');
  const [imrul, setimrul] = useState('');
  const [auth, setauth] = useState(false)

  const loginfun = () => {

    if (ti === 'farhan' && imrul === 'pass') {
      setauth(!auth)

    }
    else {
      alert('pleese correct pass')
    }



  }
  return < >



    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/stregis' element={<StuRegistation />} />
      {/* <Route path='/studetail/:tech' element={<StudentDetail/>} /> */}
      {/* <Route path='/login' element={<Login />} /> */}
      {/* <Route path='/studetail/:tech' element={auth ? <StudentDetail /> : <div className='flex justify-center mt-20 '>
        <div className="  flex text-center flex-col loginform w-[300px] p-[20px]  bg-[#e9e9e9] rounded-3xl">
          <input  className='h-[50px] mb-5  focus:outline-none focus:ring focus:ring-violet-300' type="text" placeholder='user' onChange={(e) => setti(e.target.value)} />
          <input type="password" className='h-[50px] mb-5 focus:outline-none focus:ring focus:ring-violet-300'  placeholder='password' onChange={(e) => setimrul(e.target.value)} />
          <button className='bg-[#0eb7fa] h-8 focus:ring focus:ring-violet-300 text-white ' onClick={loginfun}>Login</button> </div>
      </div>} /> */}
      <Route path='/studetail/:tech' element={<StudentDetail />}/>
      <Route path='/detailstudent/:id' element={<DetailofStudent/>} />
      <Route path='/editstudata/:id' element={<EditStudentData/>}/>
    </Routes>



  </>;
};

export default App;
