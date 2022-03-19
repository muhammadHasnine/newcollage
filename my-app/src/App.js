import React from 'react';
import {Routes,Route} from 'react-router-dom'
import StuRegistation from './pages/StuRegistation';
import Home from './pages/Home';
import StudentDetail from './pages/StudentDetail';


const App = () => {
  return < >


  
  <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/stregis' element={<StuRegistation/>}/> 
      <Route path='/studetail/:tech' element={<StudentDetail/>} />

    </Routes>

 
    
  </>;
};

export default App;
