
// import log from './login.jpg'
import logo from'./images/bit_logo.jpg'
import './Validation.css'
import  park from './images/Research-Park.jpg'

import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
const Validation = () => {
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:5000/login',{email,password})
    .then(result => { console.log(result)
      if(result.data==="Success"){
        navigate('/Department')
      }
      
    })
    .catch(err=> console.log(err))
  }
  return (
    
   <div class="whole">
    
   
    <div class="entire">
         
        <img  class="logo" src={logo}/>
      
   <div class="login">
    <h2 class="headi">FACULTY</h2>
   </div>
     
     <form  class="form" onSubmit={handleSubmit}>
       <input  class="u2" type='email' placeholder="FACULTY_ID" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}></input>
      
    
       
       <input class="p2" type='PASSWORD' placeholder="PASSWORD" name="password" id="password"  onChange={(e)=>setPassword(e.target.value)}></input>
      
     
           {/* <Link to="/Department"> <input class="bu" type='button' value="Next"></input></Link>  */}
           <button class="bu" type="submit">Submit</button>
           </form>
          <div class="loginu"><p>Don't have account?</p><Link to="/Faculty_login"><a  href='./Sign_up'>Sinup </a></Link>
          </div> 
    </div>
    </div>
  )
}

export default Validation
