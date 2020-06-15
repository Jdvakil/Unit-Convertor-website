let port = process.env.PORT||9997;
const express = require('express');
const app = express();
const bp = require('body-parser');
const path = require('path');
const joi = require('joi');
app.listen(port);

app.use(express.static(path.join(__dirname, "/")))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/', 'index.html'));
});
app.get('/length',(req,res)=>{
    res.sendFile(path.join(__dirname,'/','length.html'))
});
app.get('/mass',(req,res)=>{
    res.sendFile(path.join(__dirname,'/','mass.html'))
});
app.get('/velocity',(req,res)=>{
    res.sendFile(path.join(__dirname,'/','velocity.html'));
});
app.get('/calculator', (req,res)=>{
    res.sendFile(path.join(__dirname,'/', 'calculator.html'));
});
app.use(function(req,res) {
    res.type('html');
    res.status(404);
    res.sendFile(path.join(__dirname,'/', '404.html'));
});