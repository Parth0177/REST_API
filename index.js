const express = require('express');
const app= express();
const PORT= 3002;
const path = require('path');

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.set('view engine','ejs');
app.set('views' , path.join(__dirname,'views'));

app.set(express.static(path.join(__dirname,'public')));


app.get('/',(req,res)=>{
  res.send('Server Working Well!')
})



app.listen(PORT,()=>{
  console.log(`Server is running on PORT ${PORT}`);
  
})