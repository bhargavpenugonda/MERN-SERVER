const express = require('express')
const routes = express.Router()
const User=require('../model/userSchema')

//REST API POST METHOD TO HANDLE POST REQUEST
routes.post('/',(req, res) => {
    try{
    const {_id,name,email,password} = req.body;
    const userQuery=new User({_id,name,email,password});
    //after our query is created
    userQuery.save()
    res.status(201).send(
    {message:'User Created',userQuery});
  }catch(err){
    res.status(500).send(
        {message:err.message});
  }
})

//GET the data
routes.get('/',async(req,res) => {
    try{
        const data=await User.find();
        res.status(201).send(data);
    }
    catch(err){
            res.status(500).send({message:err.message})
            }
        })
//PUT the data (Update the data)

routes.put('/:id', async (req, res) => {
    try {
        const { password } = req.body;
        const userId = req.params.id;
         const updatedUser = await
          User.findByIdAndUpdate(userId, {password: password }, { new: true });
          //use findByIdAndUpdate instead of UpdateOne
        if (!updatedUser) {
            return res.status(404).send({ message: "User not found" }); }
        res.status(200).send({ message: "Password updated successfully", updatedUser });
    } catch (err) {
        res.status(500).send(err);
} });

routes.delete('/:id',async(req,res)=>{
    try{
        const userId=req.params.id;
        const deletedUser=await User.findByIdAndDelete(userId);
        if(!deletedUser){
            return res.status(404).send({message:'User not found'})
            }
            res.status(200).send({message:'User deleted',deletedUser})
            }catch(err){
                res.status(500).send({message:err.message})
                }
})

module.exports = routes;  