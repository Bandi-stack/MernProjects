const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel=require('./Models/Todo')


const app=express()
 
app.use(cors())

app.use(express.json())//when we send data it will be written in json format

mongoose.connect('mongodb://127.0.0.1:27017/test')  

// when connected it need to show the data so we use get method
app.get('/get',(req,res)=>{
    TodoModel.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})


 //when we add item it need to add to the db so we use /add
app.post('/add', (req,res)=>
    {
        const tasks=req.body.task;
        TodoModel.create({
            task:tasks
        })
        .then(result=>res.json(result))
        .catch(err=>res.json(err))
    })
// we need to update whether the task is updated or not
    app.put('/update/:id',(req,res)=>
{ 
    const {id}=req.params;
    TodoModel.findByIdAndUpdate({_id: id}, {done:true})
    .then(result =>res.json(result))
    .catch(err => res.json(err))
})
//when we want to delete the task we use delete
    app.delete('/delete/:id',(req,res)=>{
        const {id}=req.params;
        TodoModel.findByIdAndDelete({_id:id})
        .then(result =>res.json(result))
    .catch(err => res.json(err))
    })
    
app.listen(3001,()=>{
    console.log("server is running")
})
