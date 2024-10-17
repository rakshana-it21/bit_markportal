import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
const Faculty_login = () => {
  const[name,setName]=useState();
  const[password,setPassword]=useState();
  const[email,setEmail]=useState();
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:5000/register',{name,password,email})
    .then(result => { console.log(result)
      navigate('/Validation')
    })
    .catch(err=> console.log(err))
  }

  return (
    <div class="login">
     <h2>Register</h2>
     <form onSubmit={handleSubmit}>
     <label htmlFor="name">Name</label>
     <input type='text' id="name" name="name" placeholder='Enter your Name' onChange={(e)=>setName(e.target.value)}></input><br/>
     <label htmlFor="name">Password</label>
     <input type='password' id="password" name="password" placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)}></input><br/>
     <label htmlFor="name">Email</label>
     <input type='email' id="email" name="email" placeholder='Enter your email'onChange={(e)=>setEmail(e.target.value)}></input><br/>
     
     <button type="submit">Submit</button>
     
     </form>
    </div>
  )
}

export default Faculty_login
