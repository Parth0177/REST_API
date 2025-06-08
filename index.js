const { log } = require('console');
const express = require('express');
const app= express();
const PORT= 3002;
const path = require('path');
const {v4: uuidv4}= require('uuid');


app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.set('view engine','ejs');
app.set('views' , path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));

let posts=[
  {
    id:uuidv4(),
    username:'Parth Tiwari',
    content:'This is my first post.',
  },
  {
    id:uuidv4(),
    username:'Aryan Saxena',
    content:'This is my first post. Parth is my Father.',
  },
  {
    id:uuidv4(),
    username:'Shivansh Bajpai',
    content:'This is my first post. Aryan is my adopted son.',
  },
  {
    id:uuidv4(),
    username:'Tinku Mishra',
    content:'This is my first post. Parth is my original Father.',
  },
  {
    id:uuidv4(),
    username:'Manas Srivastava',
    content:'This is my first post. I am a very chaotic person.',
  },
];

app.get('/',(req,res)=>{
  res.render('home.ejs');
})

app.get('/posts',(req,res)=>{
  res.render('index.ejs',{posts});
});

app.get('/posts/new',(req,res)=>{
  res.render('form.ejs');
});

app.post('/posts',(req,res)=>{
  let {username,content}= req.body;
  let id= uuidv4();
  posts.push({id,username,content});
  console.log(req.body);
  res.redirect('/posts');
})

app.get('/posts/:id',(req,res)=>{
  let {id} = req.params;
  let post= posts.find((p)=> id===p.id);
  res.render('full.ejs',{post})
})

app.patch('/posts/:id', (req,res)=>{
  let {id} = req.params;
  let newcontent = req.body.content;
  console.log(newcontent);
  let post = posts.find((p)=> id===p.id);
  post.content= newcontent;
  console.log(id);
  res.send('patch requst working ')
  console.log(post);
  
})


app.get('/posts/:id/edit',(req,res)=>{
  let {id} = req.params;
  let post= posts.find((p)=> id===p.id);
  res.render('edit.ejs',{post})
})





app.listen(PORT,()=>{
  console.log(`Server is running on PORT ${PORT}`);
})