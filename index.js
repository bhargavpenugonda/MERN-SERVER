// let student={
//     name: "bhargav",
//     age:20,
//     marks: 90,
//     city:"vijayawada"
// }
// console.log("Student Details is :",student)

// function fun(a,b){
//     return a*b;
// }
// console.log(fun(10,5))

// //import http from 'http ';
// const http = require('http');
// http.createServer(function(request,response){
//     response.writeHead (200,{'Content-Type':'text/plain'});
//     //headers
//     response.end('Hello World');
//     //payload
//     }).listen(3002,()=>console.log("Server Live at http://localhost:3002/"));
//     //listen(portNumber,ErrorHandling)

// const fs = require("fs");
// const filedata=fs.readFileSync('read.txt') //Non-Callback function
// console.log(filedata.toString())
// console.log("Execution Completed") //reading sync
//readFileSync is a Non- callback function,it executes synchronously

// const fs = require("fs");
// fs.readFile('read.txt',function(ferr,filedata){  
//     if(ferr) return console.error(ferr)
//         console.log(filedata.toString())
// })
// console.log("Execution Completed") //reading async
//readFile is a callback function ,it blocks until all the other functions gets executed and later 
//it executes the callback function

//Event LOOP
// console.log("This is a First Function");
// setTimeout(()=>{
//     console.log("This is a Second Function");
// },5000)
// console.log("This is a Third Function");
//function,Time
 
// const {Socket}=require('dgram');
// const net= require('net');
// const server = net.createServer((socket)=>{
//     socket.on('close',()=>{
//         console.log("Socket Closed")
//     })
// })
// server.listen(8000)

// //PROMISE CHAINING
// const add =(a,b)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(a<0 || b<0){
//                 return reject('Negative Numbers are not allowed')
//             }
//             return resolve(a+b)
//         },3000)
//     })
// }
// const mul =(c,d)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(c<0 || d<0){
//                 return reject('Negative Numbers are not allowed')
//             }
//             return resolve(c*d)
//         },3000)
//     })
// }
// //we chain our promises with .then() method
// add(1,2).then((sum)=>{
//     console.log(sum) //log 3
//     return mul(sum,4)
// }).then((sum2)=>{
//     console.log(sum2) //log 7
// })

//ex-2 PC
// const value=(str)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(typeof str == 'string'){
//                 resolve("Promise Initiated "+str)
//             }
//             reject("The Data is Not String Type");
//     },2000)
// })
// }
// value("Function 1").then((myvalue)=>{
//     console.log(myvalue);
//     //return a chained another async fun
//     return value("Function 2")
// }).then((myvalue)=>{
//     console.log(myvalue);
// })

//this binding 
// const events={
//     name:'Birthday Party',
//     guests:['Ram','Raju'],
//     printGuest(){
//         console.log('Guest List for '+this.name)
//         this.guests.forEach((guest)=>{
//             console.log(guest+' is attending '+this.name)
//         })
//     }
// }
// events.printGuest()

// //import http from 'http ';
// const http = require('http');
// http.createServer((request,response)=> {
//     response.writeHead (200,{'Content-Type':'text/plain'});
//     //headers
//     response.end('This is My Server');
//     //payload
//     }).listen(3002,()=>console.log("Server Live at http://localhost:3002/"));
//     //listen(portNumber,ErrorHandling)

// const http = require('http');
// const superagent = require('superagent');
// (async () => {
//     const data = {
//         username: 'raju',
//         password: '1234',
//         userid: 1011
//     };
//     try {
//         const { body } = await superagent
//             .post('https://jsonplaceholder.typicode.com/posts')
//             .send(data);
//         console.log(body);
//     } catch (err) {
//         console.error('Error occurred:', err.message || err);
//     }
// })();

//Axios
// const axios = require('axios')

// axios.get("https://jsonplaceholder.typicode.com/posts").
// then((res)=>console.log(res.data)).catch((err)=>console.log(err.message || err))

// const http = require('http');
// const { StringDecoder } = require('string_decoder');
// const url = require('url');

// // Create the server
// const server = http.createServer((request, response) => {
//     const parsedUrl = url.parse(request.url, true);
//     const path = parsedUrl.pathname;
//     const method = request.method.toLowerCase();
//     const decoder = new StringDecoder('utf-8');
//     let buffer = '';

//     request.on('data', (chunk) => {
//         buffer += decoder.write(chunk);
//     });

//     request.on('end', () => {
//         buffer += decoder.end();

//         if (method === 'post' && path === '/user') {
//             const data = JSON.parse(buffer);
//             response.writeHead(200, { 'Content-Type': 'application/json' });
//             response.end(JSON.stringify({ message: "User data received", data }));
//         } else {
//             response.writeHead(404, { 'Content-Type': 'application/json' });
//             response.end(JSON.stringify({ message: "Not Found" }));
//         } 
//     });
// });

// // Start the server
// server.listen(8000, () => {
//     console.log('Server is running on port 8000');

//     // Make the axios POST request
//     const axios = require('axios');
//     const data = {
//         username: 'bhargav',
//         password: '1708',
//         userid: 1001
//     };

//     axios.post('http://localhost:8000/user', data)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(err => {
//             console.log('Error: ' + (err.message || err));
//         });
// });

//EXPRESS.JS

// const express = require('express')
// const app = express()
// const port = 3001
// // url or api endpoint,function
// app.use(express.json())  //data will be visible to express //octate or binary
// app.use(express.urlencoded({ extended: true})); //to reveal the post
// const reqFunction=(req,res,next)=>{  //first middleware
//     console.log(`Received a ${req.method}, Requested to API ${req.url}`);
//     next();
// }
// const formDataFun=(req,res,next)=>{  //second middleware
//     //fetch the data from form
//     const {name,pass}=req.body;
//     console.log(req.body);
//     req.name=name;
//     req.pass=pass;
//     next(); // call the third middleware
// }
// const userShow = (req,res)=>{ //Third middleware
//     const name= req.name || "name";
//     const pass= req.pass || "pass";
//     res.send(`<h1>Hello ${req.name} and your password is ${req.pass}</h1>`)
// }
// //route handler to pass the paramenters imagine it is client
// app.get('/login',reqFunction,(req,res)=>{
//     res.send(
//         `<form method="post" action="/login-auth">
//         <input type="text" name="name" required/>
//         <input type="password" name="pass" required/>
//         <button type="submit">Submit</button>
//         </form>`
//     );
// })
// app.post('/login-auth',reqFunction,formDataFun,userShow)

// app.use("/",
// (req,res,next)=>{ //first middleware
//     console.log("middleware 1 is initiated");
//     setTimeout(()=>{
    
//     next();},6000)
//     },
//     (req,res,next)=>{  //second middleware
//         res.send(
//             `<div>
//             <h1>Welcome</h1><p>Hello User</p>
//             </div>`
//         );
//     }
// )
// app.use("/abc",(req,res,next)=>{
//     if(req.method==='GET'){
//         res.send("Get Method is initiated")
//     }else if(req.method==='POST'){
//         res.json({
//             message:"Post Method is initiated",
//             data:req.body
//         })
//     }else{
//         res.send("Invalid Method")
//     }
// })
// const LocalDB={
//     item:"Mobile Phone",
//     price:10000,
//     model:"xs",
//     color:"black"
// }
// app.get('/product',(req,res)=>{
//     res.json(LocalDB)
// })

// //post
// app.post('/product',(req,res)=>{
// //     console.log(req.params)
//     const data=req.body;
//     res.json({
//         message:"Post Data Received",
//         itemData:data
//     })
//     // req.end();  
// })

// //put , patch - update and partial update
// app.patch('/product',(req,res)=>{
//     const data=req.body;
//     res.json({
//         message:"Partial Data is Updated",
//         itemData:data,
//         })
// })
// //app.delete()
// app.options('/product',(req,res)=>{
//     res.json({
//         message:"Options Data is Updated",
//         allowedMethods:"GET, PATCH, PUT, DELETE, OPTIONS, POST"
//     })
// })
// app.listen(port,()=>{
//     console.log(`Server is running on port ${port}`);
// });


//Routers
// const express = require('express')
// const app = express()
// const router = express.Router()
// const port = 3001
// const homeApi=require('./routes/home') //import the routes
// const loginApi=require('./routes/login')
// app.use(express.json())  //data will be visible to express //octate or binary
// app.use(express.urlencoded({ extended: true})); //to reveal the post

// //when a API request is sent to the server what well do we'll route the API request to the co-responding routes
// app.use('/',homeApi); //use intercepts the request and sends to route  "/"-->"/home"
// app.use('/',loginApi);//"/"-->"/login"
// app.listen(port,()=>{
//     console.log(`Server is running on port ${port}`);
// });

//MONGOdb
// const express = require('express')
// const app = express()
// const mongoose = require('mongoose')
// const port = 3001
// const authorAPI = require('./routes/authors')
// //const bookAPI = require('./routes/books')
// //const libraryAPI = require('./routes/library')

// app.use(express.json())
// const url='mongodb+srv://bhargavpenugonda:snb1217@atlascluster.x5w376u.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster'
// //connecting my express app to mongoDB
// mongoose.connect(url).then(()=>{console.log('MongDB connected')}) 
// .catch((err)=>console.log(err))
// //route to handle /users api endpoint
// // app.use('/users',userAPI)
// app.use('/author',authorAPI)
// //app.use('/book',bookAPI)
// app.listen(port,()=>{
//     console.log(`Server is running on port ${port}`)});
 

//Absent

// const express=require('express')
// const mongoose = require('mongoose')
// const AuthorAPi = require('./routes/authors')
// const BookApi = require('./routes/books')
// const port = 3001
// const app = express()
// app.use(express.json())
// const url='mongodb+srv://bhargavpenugonda:snb1217@atlascluster.x5w376u.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster'
// mongoose.connect(url).then(()=>{console.log('MongoDB connected')})
// .catch((err)=>{console.log(err)})
// //router API's
// app.use('/author',AuthorAPi);
// app.use('/books',BookApi);
// app.listen(port,()=>{console.log(`Server live at ${port}`)})



//Graphql

// const express = require('express')
// const mongoose = require('mongoose')
// const {ApolloServer,gql} = require('apollo-server-express')
// const typeDefs = require('./schema')
// const resolvers = require('./resolvers')
// const port = 3001
// const app = express()
// const url='mongodb+srv://bhargavpenugonda:snb1217@atlascluster.x5w376u.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster'
// app.use(express.json())
// mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log('MongoDB connected')})
// .catch((err)=>{console.log(err)})
// //start my apollo express server
// const server = new ApolloServer({typeDefs,resolvers})
// app.get('/users',async(req,res)=>{
//     try{
//         const {data,errors}=await server.executeOperation({
//             query:gql`query{
//             getUsers{
//             name
//             email
//             }
//             }`
//         });
//         if(errors){
//             console.log(errors)
//             return res.status(500).json({errors})
//         }
//         return res.status(201).json({data})
//     }
//     catch(err){console.log(err)}
// })
// app.get('/users/search/:name',async(req,res)=>{
//     try{
//         const name=req.params.name;
//         const {data,errors}=await server.executeOperation({
//             query:gql`query{searchUsers(name:${name}){id name email}}`
//         });
//         if(errors){
//             return res.status(500).send(errors)}
//             res.status(201).send(data)
//     }
//     catch(err){res.status(500).send(err);}

// })
// async function StartServer(){
//     await server.start();
//     server.applyMiddleware({app});
//     app.listen(port,()=>{
//         console.log(`Server live at ${port}`)})
// }
// StartServer();


//ECOMMERCE WEBSITE

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const {ApolloServer,gql} = require('apollo-server-express')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const userApiFromRouter = require('./routes/userRoutes')
const app = express()
const port = 3001
const url='mongodb+srv://bhargavpenugonda:snb1217@atlascluster.x5w376u.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster'
app.use(express.json())
app.use(cors())
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log('MongoDB connected')})
.catch((err)=>{console.log(err)})

//start my apollo  server
const server = new ApolloServer({typeDefs,resolvers})
app.use('/users',userApiFromRouter);
async function StartServer(){
    await server.start();
    server.applyMiddleware({app});
    app.listen(port,()=>{
        console.log(`Server live at ${port}`)})
}
StartServer();
