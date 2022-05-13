const express = require("express");
const app = express();
const port = 8000;

app.use(express.json()); // lets our app convert form info into json
app.use(express.urlencoded({extended:true})); // lets our app parse form information 


app.get("/api/hello", (req,res)=>{
    res.json({msg: "wazzzaps"});

})





//this line needs to be at the bottom of the file
app.listen(port, ()=>console.log(`listening on port${port}`));