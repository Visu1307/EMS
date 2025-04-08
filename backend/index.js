const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors")
const EmpModel = require('./models/Emp')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post('/Emp/Login',(req,res) => {
    const formData = req.body;
    EmpModel.findOne({email:formData.email})
    .then(emp=>{
        if(emp){
            if(emp.pass==formData.pass){
                res.json({status:"Success",firstName:emp.firstName})
            }
            else{
                res.json("Password doesn't match")
            }
        }
        else{
            res.json("User doesn't exist")
        }
    })
})

app.post('/HR/Login',(req,res) => {
    const {email,pass} = req.body;
    EmpModel.findOne({email:email})
    .then(emp=>{
        if(emp){
            if(emp.pass==pass){
                res.json({status:"Success",firstName:emp.firstName})
            }
            else{
                res.json("Password doesn't match")
            }
        }
        else{
            res.json("User doesn't exist")
        }
    })
})

app.post('/Emp/Register', (req, res) => {
    //const[fnm,lnm,email,phone,dob,gender,pass,confPass] = req.body
    EmpModel.create(req.body)
    .then(emp=>req.json(emp))
    .catch(err=>res.json(err))
});

app.listen(3001,()=>{
    console.log("Server is running")
})