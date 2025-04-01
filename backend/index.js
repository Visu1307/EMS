const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors")
const EmpModel = require('./models/Emp')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post('/login',(req,res) => {
    const {unm,pass,role} = req.body;
    UserModel.findOne({unm:unm})
    .then(user=>{
        if(user){
            if(user.pass==pass){
                res.json("Success")
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

app.post('/register', async (req, res) => {
    try {
        const newEmployee = new EmpModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            dateOfBirth: req.body.dateOfBirth,
            gender: req.body.gender,
            department: req.body.department,
            designation: req.body.designation,
            dateOfJoining: req.body.dateOfJoining,
            employmentType: req.body.employmentType,
            salary: req.body.salary,
            password: req.body.password
        });

        const savedEmployee = await newEmployee.save();
        res.status(201).json(savedEmployee);
    } catch (error) {
        console.error("Error registering employee:", error);
        res.status(500).json({ message: "Server error", error });
    }
});

app.listen(3001,()=>{
    console.log("Server is running")
})