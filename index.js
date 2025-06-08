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
    username:'Parth Tiwari',
    content:'This is my first post.',
  },
  {
    username:'Aryan Saxena',
    content:'This is my first post. Parth is my Father.',
  },
  {
    username:'Shivansh Bajpai',
    content:'This is my first post. Aryan is my adopted son.',
  },
  {
    username:'Tinku Mishra',
    content:'This is my first post. Parth is my original Father.',
  },
  {
    username:'Manas Srivastava',
    content:'This is my first post. I am a very chaotic person.',
  },
];


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





app.listen(PORT,()=>{
  console.log(`Server is running on PORT ${PORT}`);
})