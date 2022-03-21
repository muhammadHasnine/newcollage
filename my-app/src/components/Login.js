import React, { useState } from 'react'
import Studentdetails from '../pages/StudentDetail';

const Login = () => {
    const [ti, setti] = useState('');
  const [imrul, setimrul] = useState('');
  const [auth, setauth] = useState(false)

  const loginfun = ()=>{

    if(ti === 'farhan' && imrul ==='pass'){
        setauth(!auth)

    }
    else{
        alert('pleese correct pass')
    }

      

  }
  return (
    <div>
        {auth? <><p>Hello dashboard</p>  <Studentdetails auth={auth} /></>: <><div className="loginform">
        <input type="text" placeholder='user' onChange={(e)=>setti(e.target.value)} />
        <input type="text" placeholder='password' onChange={(e)=>setimrul(e.target.value)} />
        <button onClick={loginfun}>Upload</button> </div></>}
        </div>
  )
}

export default Login