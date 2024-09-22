import React from 'react'
import './Agri.css'
import { Link } from 'react-router-dom'
import Agri_sem1 from './Agri_sem1'
const Agri = () => {
  return (
    <div>
     <div class="navbar">
    <ul>
    <li class="sem8">SEM8</li>
    <li class="sem7">SEM7</li>
    <li class="sem6">SEM6</li>
    <li class="sem5">SEM5</li>
    <li class="sem4">SEM4</li>
    <li class="sem3">SEM3</li>
    <li class="sem2">SEM2</li>
    <li class="sem1">SEM1</li>
    
    </ul>
    
     </div>
     <div class="center">
        <table class="t1">
            <th>
                course_code
            </th>
          
            <th>
                subjects
            </th>
            <tr>
                <td>22MA101</td>
                <td><Link to="/Agri1">ENGINEERING MATHEMATICS</Link></td>
            </tr>
            <tr>
                <td>22PH102</td>
                <td><Link to="/Agri_phy">ENGINEERING PHYSICS</Link></td>
            </tr>
            <tr>
                <td>22CH103</td>
                <td><Link to="/Agri_chem">ENGINEERING CHEMISTRY I</Link></td>
            </tr>
            <tr>
                <td>22GE001</td>
                <td><Link to ="/Agri_comp">FUNDAMENTALS OF COMPUTING</Link></td>
            </tr>
            <tr>
                <td>22GE003</td>
                <td><Link to ="/Agri_ele">BASICS OF ELECTRICAL ENGINEERING</Link></td>
            </tr>
            
            <tr>
                <td>22HS001</td>
                <td><Link to ="/Agri_eng">FOUNDATIONAL ENGLISH</Link></td>
            </tr>
            <tr>
                <td>22GE005</td>
                <td><Link to ="/Agri_draw">ENGINEERING DRAWING</Link></td>
            </tr>
            <tr>
                <td>22HS003</td>
                <td><Link to ="/Agri_tamil">தமிழர் மரபு / Heritage of Tamils</Link></td>
            </tr>
        </table>
     </div>
    </div>
    
  )
}

export default Agri
