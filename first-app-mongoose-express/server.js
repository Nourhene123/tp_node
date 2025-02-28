const express = require('express')
const mongoose = require('mongoose')
const userRoutes= require('./Routes/user.route')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI
app.use(express.json())


mongoose.connect(MONGO_URI).then(()=>{
    console.log('connected to mongodb')
}).catch(err=>{
    console.log(err)
})

app.use('/users',userRoutes)

app.listen(PORT,()=>{
    console.log('listening on port',PORT)
})


