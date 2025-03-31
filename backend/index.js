const express = require('express')

const app = express()

app.get('/',()=>{
    console.log('OUtput is coming')
})

app.listen(3001,()=>{
    console.log('Server is running')
})