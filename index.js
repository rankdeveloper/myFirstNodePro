const express = require('express')
const path = require('path');
const pathDir = path.join(__dirname);
const app = express();

app.get('/' , (req , res) => {
    res.sendFile(pathDir+'/home.html')
})


app.get('/home' , (req , res) => {
    res.sendFile(pathDir+'/home.html')
})

app.get('/form' , (req , res) => {
    res.sendFile(pathDir+'/form.html')
})

app.get('/about' , (req , res) => {
    res.sendFile(pathDir+'/about.html')
})

app.get('/contact' , (req , res) => {
    res.sendFile(pathDir+'/contact.html')
})


app.get('*' , (req , res) => {
    res.sendFile(pathDir+'/404.html')
})

app.listen(2000, () => {
    console.log("server is running on port 2000");
})