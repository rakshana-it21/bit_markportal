import React, { useState } from 'react';
import './Agri_sem.css'
const Agri_sem1 = () => {
  const [vals, setVals] = useState([{id: "7376211AG102", marks:0, val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG103", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG104", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG105", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG106", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG107", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG108", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG109",marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG110", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},
  {id: "7376211AG111", marks:0, val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG112", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG113", marks:0, val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG114", marks:0, val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG115", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG116", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG117", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG118", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG119", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG120", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},
  {id: "7376211AG121",marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG122", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG123", marks:0, val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG124", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG125", marks:0, val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG126", marks:0, val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG127", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG128", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG129", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG130", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},
  {id: "7376211AG131", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG132", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG133",marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG134", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG135", marks:0, val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG136", marks:0, val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG137", marks:0, val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG138", marks:0, val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG139", marks:0, val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG140", marks:0, val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},
  {id: "7376211AG141",marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG142", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG143", marks:0, val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG144", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG145", marks:0, val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG146", marks:0, val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG147", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG148", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG149", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG150", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},
  {id: "7376211AG151", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG152", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG153",marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0},{id: "7376211AG154", marks:0,  val: 0, CO1: 0, marks2:0, val2: 0, CO2: 0, marks3 :0, val3 :0 , CO3: 0,marks4:0,val4:0,CO4:0,marks5:0,val5:0,CO5:0}
])
   
    /* for 1co1*/
    const [m1,setValue]=useState('');
    const [co1,setCo1]=useState('');
    const[co_attain1,setCo1_at]=useState()
    
    const handleCo1Change = (e)=>{
        const marks=Number(e.target.value)
      
      const total=20;
      const percent=(marks/total)*100
      const fifty=total*(50/100);
        const sixty=total*(60/100);
        const seventy=total*(70/100);
       
   
       let temp=4
        if(marks<fifty){ 
          temp=0;
        }
        else if(marks>=fifty&&marks<sixty) {
      temp=1;
        }
      else if(marks>=sixty&&marks<seventy) {temp=2
      }
      else if(marks>=seventy){
        temp=3
      }
      
       setValue(marks)
       
   setCo1(percent)
    // console.log(e.target.id)
    console.log(marks)
        
       vals.map(ind=> {
      
       if(ind.id ===e.target.id)
        {
         
          ind.val=percent
          ind.CO1=temp
          ind.marks=marks
          

       }
       
            
   })

   }
  /*1co2*/
 const [m2,setValue1]=useState();
   const[co2,setCo2]=useState();
   const[co_attain2,setCo2_at]=useState()
   const handleCo2Change =(e) =>{
    const total=20
    const marks=Number(e.target.value)
    const percent=(marks/total)*100
    const fifty=total*(50/100);
        const sixty=total*(60/100);
        const seventy=total*(70/100);
        let temp=24
        if(marks<fifty) temp=0;
        else if(marks>=fifty&&marks<sixty) temp=1
      else if(marks>=sixty&&marks<seventy) temp=2
      else if(marks>=seventy) temp=3
      setValue(marks)
      setCo1(percent)
      vals.map(ind=> {
      
        if(ind.id ===e.target.id)
         {
          
           ind.val2=percent
           ind.CO2=temp
           console.log(percent)
           ind.marks2=marks
           console.log(marks)
 
        }
        
             
    })
   }
   /*1co3*/
 
   const handleCo3Change =(e) =>{
    const total=20
    const marks=Number(e.target.value)
    const percent=(marks/total)*100
    const fifty=total*(50/100);
        const sixty=total*(60/100);
        const seventy=total*(70/100);
        let temp=24
        if(marks<fifty) temp=0;
        else if(marks>=fifty&&marks<sixty) temp=1
      else if(marks>=sixty&&marks<seventy) temp=2
      else if(marks>=seventy) temp=3
      setValue(marks)
      setCo1(percent)
      vals.map(ind=> {
      
        if(ind.id ===e.target.id)
         {
          
           ind.val3=percent
           ind.CO3=temp
           console.log(percent)
           ind.marks3=marks
           console.log(marks)
 
        }
        
             
    })
   }
 /*CO4*/
   const handleCo4Change =(e) =>{
    const total=20
    const marks=Number(e.target.value)
    const percent=(marks/total)*100
    const fifty=total*(50/100);
        const sixty=total*(60/100);
        const seventy=total*(70/100);
        let temp=24
        if(marks<fifty) temp=0;
        else if(marks>=fifty&&marks<sixty) temp=1
      else if(marks>=sixty&&marks<seventy) temp=2
      else if(marks>=seventy) temp=3
      setValue(marks)
      setCo1(percent)
      vals.map(ind=> {
      
        if(ind.id ===e.target.id)
         {
          
           ind.val4=percent
           ind.CO4=temp
           console.log(percent)
           ind.marks4=marks
           console.log(marks)
 
        }
        
             
    })
   }
   /*CO5*/
   const handleCo5Change =(e) =>{
    const total=20
    const marks=Number(e.target.value)
    const percent=(marks/total)*100
    const fifty=total*(50/100);
        const sixty=total*(60/100);
        const seventy=total*(70/100);
        let temp=24
        if(marks<fifty) temp=0;
        else if(marks>=fifty&&marks<sixty) temp=1
      else if(marks>=sixty&&marks<seventy) temp=2
      else if(marks>=seventy) temp=3
      setValue(marks)
      setCo1(percent)
      vals.map(ind=> {
      
        if(ind.id ===e.target.id)
         {
          
           ind.val2=percent
           ind.CO2=temp
           console.log(percent)
           ind.marks2=marks
           console.log(marks)
 
        }
        
             
    })
   }
   
  return (
    
    <div>
      <div class="top"><h1>ENGINEERING MATHEMATICS - SEM</h1></div>
       
     <div class="content">
     
      <div class="cen">
    
       <table class="t2">
        <th>ROLL_NO</th>
        <th> CO1</th>
        <th>C02</th>
        <th>CO3</th>
        <th>C04</th>
        <th>CO5</th>
        <th>C01_PERCENTAGE</th>
        <th>CO2_PERCENTAGE</th>
        <th>CO3_PERCENTAGE</th>
        <th>C04_PERCENTAGE</th>
        <th>CO5_PERCENTAGE</th>
        <th>CO1_ATTAINMENT</th>
        <th>CO2_ATTAINMENT</th>
        <th>CO3_ATTAINMENT</th>
        <th>CO4_ATTAINMENT</th>
        <th>CO5_ATTAINMENT</th>
        <th>SEM MARKS</th>
         
        {
        vals.map(val =>
        (
          <tr>
          <td>{val.id}</td>
          
          <td><input class="input-box" type='text' placeholder='co1' id={val.id}  onChange={handleCo1Change} /></td>
         
          <td><input class="input-box"  type='text'name="m2" placeholder='co2' id={val.id} onChange={handleCo2Change}/></td>
          <td><input class="input-box"  type='text' name="m3" placeholder='co3'id={val.id} onChange={handleCo3Change}/></td>
          <td><input class="input-box"  type='text'name="m4" placeholder='co4' id={val.id} onChange={handleCo4Change}/></td>
          <td><input class="input-box"  type='text' name="m5" placeholder='co5'id={val.id} onChange={handleCo5Change}/></td>
          <td><input class="input-box" value={val.val} type='text'placeholder='co3%'/></td>
          <td><input class="input-box" value={val.val2} type='text'placeholder='co3%'/></td>
          <td><input class="input-box" value={val.val3} type='text'placeholder='co3%'/></td>
          <td><input class="input-box" value={val.val4} type='text'placeholder='co3%'/></td>
          <td><input class="input-box" value={val.val5} type='text'placeholder='co3%'/></td>
          <td><input class="input-box" value={val.CO1} type='text' placeholder='coattained' /></td>
          <td><input class="input-box" value={val.CO2} type='text' placeholder='coattained' /></td>
          <td><input class="input-box" value={val.CO3} type='text' placeholder='coattained' /></td>
          <td><input class="input-box" value={val.CO4} type='text' placeholder='coattained' /></td>
          <td><input class="input-box" value={val.CO5} type='text' placeholder='coattained' /></td>
          <td><input class="input-box" value={Number(val.marks)+Number(val.marks2)+Number(val.marks3)+Number(val.marks4)+Number(val.marks5)} type='text' placeholder='pt1_marks'></input></td>
          </tr>
        
        ))}
    
            
            
            
       </table>
      </div>
      </div>
    </div>
  )
} 


export default Agri_sem1
