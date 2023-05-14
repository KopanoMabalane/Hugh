const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.get('/',(req,res) => {
    res.send(`
    <style>
    body {
        background-color:lightblue;
        color:gray
    }
    h1 {
        font-size:100px
    }
    label {
        font-size:35px
    }
    input {
        width:300px;
        height:50px;
    }
    button {
        color:black;
        border-radius:20px;
        height:50px;
        width:400px;
    }
    div { 
        color:gray;
        font-size:30px
    }
    </style>
    <body>
    <header>
    <h1>BSint</h1>
    </header>
    <main>
    <div>We are delighted to invite you to attend the BSint, which will take place on 05 June at 12:00 at the Mafikeng Hall in mafikeng. This event is held to teach student how to establish and run businesess or how to gain employement after graduation .</div>
    <form action="/results" method="POST">
    <div>
    <br>
    <div>Enter your name and email so that we can keep a seat for you</div>
    <label>Enter Your name : </label>
    <input type="text" name="save"/>
    </div>
    <br>
    <div>
    <label>Enter email : </label>
    <input type="email" name="save1"/>
    </div>
    <br>
    <button>Send</button>
    </header>
    </form>
    </body>
    `)
})
app.post("/results",(req,res) => {
    if(req.body.save == "") {
        res.send(`<h1>Please Enter your name</h1>`)
    }
    else if(req.body.save1 == "") {
        res.send(`<h1>Please Enter your Email</h1>`)
    }
    else {
        res.send(`<h1>DONE</h1>
        <h1>We look forward to seeing you</h1>
        `)
        console.log(req.body.save1)
        console.log(req.body.save)
        
    }
})
app.listen(3000,() => {
    console.log("Listening on port 3000")
})