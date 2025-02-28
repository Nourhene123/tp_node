const express=require("express")
const User=require('../models/user')
const router=express.Router()

router.post('/create',async(req,res)=>
{   try{
    const user=new User(req.body)
    await user.save()
    res.status(201).send({message:"user created successfully",user})
}catch(error){
    res.status(500).send({message:error.message})
}
    
}
)  
router.get('/all',async(req,res)=>
{   try{
    const users=await User.find()
    res.status(200).send(users)
}catch(error){
    res.status(500).send({message:error.message})
}}) 
module.exports=router
