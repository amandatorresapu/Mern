const express = require("express"); // import express so we can use express features 

const app = express(); // create our app variable which is an instance of express
const port = 8000;

//Need to have these 2 lines before routes
app.use(express.json()); // lets our app convert form info into json
app.use(express.urlencoded({extended:true})); // lets our app parse form information 

// our fake data here 

let quotes = [
    {content: "test of test", author: "meow of meow"},
    {content: "test of test1", author: "bark of bark"},
    {content: "test of test23", author: "Moo of moooooooooo"}
]
    


//create our api endpoints here: eg--> http://localhost:8000/api/hello

app.get("/api/hello", (req,res)=>{
    res.json({msg: "wazzzap"});

})

// get all quotes endpoint
app.get("/api/quotes", (req,res)=>{
    res.json({count: quotes.length,results: quotes });

})

// get one quotes endpoint based on Id
app.get("/api/quotes/:idx", (req,res)=>{
    res.json({count: quotes.length,results: quotes[req.params.idx] });

})

// create a new quote
app.post("/api/quotes", (req, res)=>{
    console.log("request . body is this-->", req.body)
    quotes.push(req.body)
    res.json({count: quotes.length,results: quotes })
})

// update a new quote on idx number
app.put("/api/quotes/:idx", (req,res)=>{
    quotes[req.params.idx] = req.body; //update the quote array at speific index
    res.json({count: quotes.length,results: quotes});

})

// delete a quote on idx number
app.delete("/api/quotes/:idx", (req,res)=>{
    const idx = req.params.idx;
    quotes.splice(idx, 1)
    res.json({count: quotes.length,results: quotes })

})




//this line needs to be at the bottom of the file
app.listen(port, ()=>console.log(`listening on port${port}`));