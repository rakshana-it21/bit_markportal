const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/employ")
const employeeSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
  });
  
  const Employee = mongoose.model("employees", employeeSchema);
  // app.post("/register",(req,res)=>{
  //   Employee.create(req.body)
  //   .then(Employee=>res.json())
  //   .catch(err=>res.json(err)) 
  // })
  app.post("/login",(req,res)=>{
    const{email,password}=req.body
    Employee.findOne({email:email})
    .then(user=>{
      if(user) {
       if(user.password===password)
         {
          res.json("Success");
         }
         else{
          res.json("The password is wrong")
         }
      }
      else{
        res.json("No record exist");
      }
    })
  })
  app.post("/register", (req, res) => {
    Employee.create(req.body)
      .then(employees => res.json({ success: true, employees }))
      .catch(err => res.status(400).json({ success: false, error: err.message }));
  });
app.listen(5000,()=>{
    console.log("started")
})