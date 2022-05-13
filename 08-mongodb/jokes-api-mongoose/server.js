const express = require("express"); // import express so we can use express features 

const app = express(); // create our app variable which is an instance of express
const port = 8000;

//Need to have these 2 lines before routes
app.use(express.json()); // lets our app convert form info into json
app.use(express.urlencoded({extended:true})); // lets our app parse form information 



require("./server/config/mongoose.config");
require("./server/routes/joke.routes")(app);








//this line needs to be at the bottom of the file
app.listen(port, ()=>console.log(`listening on port${port}`));