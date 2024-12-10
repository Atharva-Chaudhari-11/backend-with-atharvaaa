const express = require('express')

const app = express()

const port = 4000 

app.get("/" , (req,res)=>{
    res.send(" <h1>hello we create the server </h1>")
})

app.get("/test-server" , (req,res)=>{
    res.send(`${port} here we are created the server successfully`)
})

app.get("/api/jokes" , (req,res)=>{
    const jokes = [
        { 
            id: 1,
            autor:"yellow",
            content:"i hate yellow and i love red",
        },{
            
            id: 2,
            autor:"red",
            content:"i hate yellow and i love red",
        },{
            
            id: 3,
            autor:"blue",
            content:"i hate blue and i love red",
        },{
            
            id: 4,
            autor:"yellow",
            content:"i hate yellow and i love red",
        },{
            id: 5,
            autor:"yellow",
            content:"i hate yellow and i love red",
        }
    ]

    res.send(jokes)
})

app.listen(port , () => {
    console.log(`Example app listening on port ${port}`)
})