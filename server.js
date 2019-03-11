const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/hello',(req,res)=> {
    res.send({message : 'JHello Express!'});
});

app.get('/api/customers',(req,res)=>{
    res.send(
        [{
        'id':1,
        'image':'https://placeimg.com/64/64/any',
        'name':'명제',
        'birthday':'940707',
        'gender':'남자',
        'job':'대학생'
      
      },
      {
        'id':2,
        'image':'https://placeimg.com/64/64/any',
        'name':'초림',
        'birthday':'970412',
        'gender':'여자',
        'job':'간호사'
      
      }]
      );
});

app.listen(port,()=>{console.log(`Listening on port ${port}`);});