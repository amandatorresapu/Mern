const JokeController = require("../controllers/joke.controller")


module.exports = (app)=>{

    
//routes here(app.get or post or put or delete)
app.get("/api/hello", JokeController.sayHello);
app.get("/api/jokes", JokeController.findAllJokes);
app.post("/api/jokes", JokeController.createJoke);
// //find random jokes
// app.get("/api/jokes/random", JokeController.findRandomJoke)

app.get("/api/jokes/:id", JokeController.findOneJoke)
app.put("/api/jokes/:_id", JokeController.updateJoke)
app.delete("/api/jokes/:_id", JokeController.deleteJoke)





}
