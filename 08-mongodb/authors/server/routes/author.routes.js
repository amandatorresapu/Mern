const AuthorController = require("../controllers/author.controller")


module.exports = (app)=>{

    
//routes here(app.get or post or put or delete)
app.get("/api/hello", AuthorController.sayHello);
app.get("/api/authors", AuthorController.findAllAuthors);
app.post("/api/authors", AuthorController.createAuthor);
// //find random jokes
// app.get("/api/jokes/random", JokeController.findRandomJoke)

app.get("/api/authors/:_id", AuthorController.findOneAuthor)
app.put("/api/authors/:_id", AuthorController.updateAuthor)
app.delete("/api/authors/:_id", AuthorController.deleteAuthor)

}