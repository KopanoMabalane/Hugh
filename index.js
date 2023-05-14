const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.get('/',(req,res) => {
    res.send(`
    <form action="/results" method="POST">
    <input type="text" name="save"/>
    <button>Click</button>
    </form>
    `)
})
app.post("/results",(req,res) => {
    if(req.body.save == "") {
        res.send(`<h1>Please Enter your name</h1>`)
    }
    else {
        res.send(`<h1>Your name is ${req.body.save}</h1>`)
        console.log(req.body.save)
    }
})
app.listen(3000,() => {
    console.log("Listening on port 3000")
})