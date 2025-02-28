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
router.get('/:name',async(req,res)=>{   
    try{
    const user  = await User.findOne({name:req.params.name})                    
    if(!user){
        return res.status(404).send({message:"user not found"})
    }   
    res.status(200).send(user)
}catch(error){
    res.status(500).send({message:error.message})
}
})
router.put('/update/:name',async(req,res)=>
{   try{
    const user=await User.findOne({name:req.params.name})
    if(!user){
        return res.status(404).send({message:"user not found"})
    }
    await User.findOneAndUpdate({name:req.params.name},{$set:{name:req.body.name} })
    res.status(200).send(user)
}catch(error){
    res.status(500).send({message:error.message})
}
}
)
module.exports=router
