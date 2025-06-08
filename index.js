const express = require('express');
const app= express();
const PORT= 3002;
const path = require('path');

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.set('view engine','ejs');
app.set('views' , path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));

let posts=[
  {
    id:"1a",
    username:'Parth Tiwari',
    content:'This is my first post.',
  },
  {
    id:'2b',
    username:'Aryan Saxena',
    content:'This is my first post. Parth is my Father.',
  },
  {
    id:'3c',
    username:'Shivansh Bajpai',
    content:'This is my first post. Aryan is my adopted son.',
  },
  {
    id:'4c',
    username:'Tinku Mishra',
    content:'This is my first post. Parth is my original Father.',
  },
  {
    id:'5d',
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
  posts.push({username,content});
  console.log(req.body);
  res.redirect('/posts');
})

app.get('/posts/:id',(req,res)=>{
  let {id} = req.params;
  let post= posts.find((p)=> id===p.id);
  console.log(post);
  res.render('full.ejs',{post})
})






app.listen(PORT,()=>{
  console.log(`Server is running on PORT ${PORT}`);
})