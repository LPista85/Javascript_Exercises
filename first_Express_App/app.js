const express = require("express");
const app = express()

/* 
app.use((req, res)=>{
    console.log("We got a new request")
    res.send("<h1>This is my Webpage</h1>")
}) */

app.get('/', (req, res)=>{
    res.send('home')
})

app.get('/cats', (req, res)=>{
    res.send('<h1>Meow</h1>')
})

app.get('/dogs', (req, res)=>{
    res.send('<h1>Woof</h1>')
})

app.get('*', (req,res)=>{
    res.send('i do not knwo that path')
})


app.listen(3000, ()=>{
    console.log("listening on port 3000")
})

