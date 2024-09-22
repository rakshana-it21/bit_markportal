import React from 'react'
import './Department.css'
import Aero from './images/Aero.png'
import itd from './images/it.png'
import csbs from './images/csbs.png'
import mech from './images/mech.png'
import mechatro from './images/mechatro.png'
import cse from './images/cse.png'
import aids from './images/aids.png'
import agri from './images/agri.png'
import air from './images/air.png'
import auto from './images/auto.png'
import biotech from './images/biotech.png'
import biomed from './images/biomed.png'
import civil from './images/civil.png'
import csd from './images/csd.png'
import ml from './images/ml.png'
import ct from './images/ct.png'
import ee from './images/ee.png'
import ec from './images/ec.png'
import ei from './images/ei.png'
import tt from './images/tt.png'
import ft from './images/ft.png'
import food from './images/food.png'
import ise from './images/ise.png'
import manage from './images/manage.png'
import { Link } from 'react-router-dom'

import { Land } from './Landing';

const Department = () => {
  return (
   <div>
      <div class="header">
        <h2  class="text">Choose Departments</h2>
      </div>
      <div class="grid">
      <Link to="/Agri"><div class="one"><img class="Aero" src={agri}></img><h2 class="AERO">AGRI</h2></div></Link>
      <div class="one"><img class="Aero" src={air}></img><h6 class="AERO">AERO</h6></div>
      <div class="one"><img class="Aero" src={aids}></img><h6 class="AERO">AIDS</h6></div>
      <div class="one"><img class="Aero" src={ml}></img><h6 class="AERO">AIML</h6></div>
      <div class="one"><img class="Aero" src={auto}></img><h6 class="AERO">AUTO</h6></div>
      <div class="one"><img class="Aero" src={biomed}></img><h6 class="AERO">BIOMED</h6></div>
      <div class="one"><img class="Aero" src={biotech}></img><h6 class="AERO">BIOTECH</h6></div>
      <div class="one"><img class="Aero" src={civil}></img><h6 class="AERO">CIVIL</h6></div>
      <div class="one"><img class="Aero" src={csbs}></img><h6 class="AERO">CSBS</h6></div>
      <div class="one"><img class="Aero" src={csd}></img><h6 class="AERO">CSD</h6></div>
      <div class="one"><img class="Aero" src={cse}></img><h6 class="AERO">CSE</h6></div>
      <div class="one"><img class="Aero" src={ct}></img><h6 class="AERO">CT</h6></div>
      <div class="one"><img class="Aero" src={ee}></img><h6 class="AERO">EEE</h6></div>
      <div class="one"><img class="Aero" src={ec}></img><h6 class="AERO">ECE</h6></div>
      <div class="one"><img class="Aero" src={ei}></img><h6 class="AERO">E&I</h6></div>
      <div class="one"><img class="Aero" src={ft}></img><h6 class="AERO">FT</h6></div>
      <div class="one"><img class="Aero" src={food}></img><h6 class="AERO">FD</h6></div>
      <div class="one"><img class="Aero" src={ise}></img><h6 class="AERO">ISE</h6></div>
      <div class="one"><img class="it" src={itd}></img><h6 class="AERO">IT</h6></div>
      <div class="one"><img class="Aero" src={mech}></img><h6 class="AERO">MECHANICAL</h6></div>
      <div class="one"><img class="Aero" src={mechatro}></img><h6 class="AERO">MECHATRONICS</h6></div>
      <div class="one"><img class="Aero" src={tt}></img><h6 class="AERO">TT</h6></div>
      <div class="one"><img class="Aero" src={manage}></img><h6 class="AERO">MANAGEMENT</h6></div>
      
      
     
      </div>
      </div>
  )
}

export default Department
