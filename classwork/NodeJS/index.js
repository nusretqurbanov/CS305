// npm init /
// npm i express
// npm install colors body-parser
const express=require('express')
const bodyParser=require('body-parser')
require('colors')

const app = express()
app.use(bodyParser.json())

const users = [{
    id :1,
    username:'Nihad'
},
{
    id :1,
    username:'Nihad'
},
{
    id :1,
    username:'Nihad'
},]

// app.get('/',(req,res) =>{
//     res.send(sqlDB)
// })
    
const PORT =5000
app.listen((PORT),() => console.log(`Server is running:http://localhost:${PORT}`.bold.green))

app.get('/',(req,res) =>{
    res.status(200).json(users)
})

app.get('/:id',(req,res) =>{
    const {id} =req.params
    const user =users.find((item) => item.id == id)
    if (user){
         res.status(200).json(users)
    }
    else {
        res.status(404).json('user not found with given id')
    }
  
})

app.post('/',(req,res)=> {
    const userBody =req.body 
    users.push(userBody)
    res.status(201).json('user created succesfully')
})