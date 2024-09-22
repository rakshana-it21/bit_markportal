import React from 'react'
import './Landing.css'
import log from'./images/bit_logo.jpg'
import res from './images/marks.jpg'
import { Link } from "react-router-dom"; 
const Landing = () => {
  return (
    
   <div class="container">
    <div class="splitleft">
    <Link to="/Validation"> <div class="faculty">
      FACULTY

     </div></Link>
     <div class="student">
      STUDENT
     </div>
    </div>
    <div class="splitright">
      <div class="img1"><img class="log" src={log} /></div>
      <h3 class="heading">BANNARI AMMAN INSTITUTE OF TECHNOLOGY</h3>
      <h3 class="h1">MARK ENTRY PORTAL</h3>
      <img class="mark" src={res}/>
    </div>
    
   </div>
  
  )
}

export default Landing
