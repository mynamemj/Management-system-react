const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/hello',(req,res)=> {
    res.send({message : 'JHello Express!'});
});

app.get('ap/hel',(req,res)=>{
    res.send({message:"ffff"});    
});

app.listen(port,()=>{console.log(`Listening on port ${port}`);});