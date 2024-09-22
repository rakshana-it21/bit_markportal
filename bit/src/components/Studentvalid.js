import React from 'react'
// import log from './login.jpg'
import logo from'./images/bit_logo.jpg'
import './Validation.css'
import  park from './images/Research-Park.jpg'
const Studentvalid = () => {
  return (
    
   <div class="whole">
    
   
    <div class="entire">
      
        <img  class="logo" src={logo}/>
      
   <div class="login">
    <h2>STUDENT</h2>
   </div>
     
      {/* <img  class="img1" src={log} alt="" width="20px"/> */}
       <input  class="u2" type='text' placeholder="STUDENT_ID"></input>
      
    
       
       <input class="p2" type='PASSWORD' placeholder="PASSWO"></input>
      
     
             <input class="bu" type='button' value="Next"></input>
      
       
    </div>
    </div>
  )
}

export default Studentvalid
