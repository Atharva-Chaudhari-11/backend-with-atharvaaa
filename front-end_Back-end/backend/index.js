import express from 'express'
const app = express()

const port = process.env.PORT || 3000

app.get('/' , (req,res)=>{
    res.send("<h1> On the Home Directory </h1>")
})

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            "id": 1,
            "title": "Checkmatey",
            "content": "What did one pirate say to the other when he beat him at chess?",
    },
    {
        "id": 2,
        "title": "It was just the same old grind over and over.",
        "content": "Why did I quit my job at the coffee shop the other day?",
    },
    {
        "id": 3,
        "title": "It's a total rip-off.",
        "content": "Why should you never buy anything that has Velcro with it?",
    }
    ];
    res.send(jokes)
})


app.listen(port , ()=>{
    console.log(`server is running on ${port}`)
})