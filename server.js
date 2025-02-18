const express = require('express');
const app=express();
let todo=[{id:1,title:"filme1"},{id:2,title:"filme1"}]

app.listen(5000,()=>{
    console.log('server is running on port ',5000);
});
app.post('api/todo/create',(req,res)=>
{todo.push(req,body)
 res.send(todo)})

app.get('/api/todo/all',(req,res)=>
    {
     res.send(todo)})

app.put('/api/todo/update/:id',(req,res)=>
    {
        const id=Number(req.params.id)
        todo=todo.map(todo=>{
            return todo.id=== id?{...todo,...req.body}:todo
        })
     })
app.delete('/api/todo/delete/:id',(req,res)=>
{
    const id=number(req.params.id)
    todo=todo.filter(todo=>todo.id!==id)
    res.send(todo)
})
//midlleware for pasrsing to form json 
app.use(express.json())
//parameter 
app.get('/user/:id',(req,res)=>{
    const id=req.params.id ;
    res.send(id);
    })
app.get('/file',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
});
app.get('/',(req,res)=>{
    res.send('welcome to my serve');
    res.json({success:" hello to my serve"});
    res.end('welcome to my serve ');
});
app.get('/api/todo/:id',(req,res)=>{
    const id=number(req.params.id );
    let checktodos=todo.find(todo=>todo.id===id)
  if(checktodos)
  {res.status(404).send("todo not found")}

    res.send(checktodos);
 
});

