const express=require('express');
const mysql = require('mysql');
const cors=require('cors');

const app = express();
app.use(cors());

app.get('/',(re,res)=>{
    return res.json("From Backend Side");
})

app.listen(3306,()=>{
    console.log("Server is running on port 3306");
})