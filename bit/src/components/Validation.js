import React from 'react'
// import log from './login.jpg'
import logo from'./images/bit_logo.jpg'
import './Validation.css'
import  park from './images/Research-Park.jpg'
import { Link} from 'react-router-dom';
const Validation = () => {
  return (
    
   <div class="whole">
    
   
    <div class="entire">
         
        <img  class="logo" src={logo}/>
      
   <div class="login">
    <h2 class="headi">FACULTY</h2>
   </div>
     
     <form  class="form" action="POST">
       <input  class="u2" type='text' placeholder="FACULTY_ID"></input>
      
    
       
       <input class="p2" type='PASSWORD' placeholder="PASSWORD"></input>
      
     
           <Link to="/Department"> <input class="bu" type='button' value="Next"></input></Link> 
           </form>
       
    </div>
    </div>
  )
}

export default Validation
