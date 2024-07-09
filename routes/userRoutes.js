const express = require('express')
const router = express.Router()
const typeDefs = require('../schema')
const resolvers = require('../resolvers')
const { ApolloServer,gql } = require('apollo-server-express')
//REST API POST METHOD TO HANDLE POST REQUEST
//3001/users/register
const server = new ApolloServer({typeDefs,resolvers});
router.post('/register',async (req, res) => {
    try{
        const {name,email,password} = req.body;
        const {data,error}= await server.executeOperation({
            query:gql`
            mutation{
                createUser(input:{name:"${name}",
                email:"${email}",password:"${password}"}){
                id
                name
                email
                password
            }
        }`
        });
        if(error){
            res.status(500).send({message:err})
        }
        res.status(201).send(data);
  }catch(err){
    res.status(500).send(
        {message:err.message});
  }
})

// //GET the data
// router.get('/',async(req,res) => {
//     try{
//         const data=await User.find();
//         res.status(201).send(data);
//     }
//     catch(err){
//             res.status(500).send({message:err.message})
//             }
//         })
// //PUT the data (Update the data)

// router.put('/:id', async (req, res) => {
//     try {
//         const { password } = req.body;
//         const userId = req.params.id;
//          const updatedUser = await
//           User.findByIdAndUpdate(userId, {password: password }, { new: true });
//           //use findByIdAndUpdate instead of UpdateOne
//         if (!updatedUser) {
//             return res.status(404).send({ message: "User not found" }); }
//         res.status(200).send({ message: "Password updated successfully", updatedUser });
//     } catch (err) {
//         res.status(500).send(err);
// } });

// router.delete('/:id',async(req,res)=>{
//     try{
//         const userId=req.params.id;
//         const deletedUser=await User.findByIdAndDelete(userId);
//         if(!deletedUser){
//             return res.status(404).send({message:'User not found'})
//             }
//             res.status(200).send({message:'User deleted',deletedUser})
//             }catch(err){
//                 res.status(500).send({message:err.message})
//                 }
// })

module.exports = router;  