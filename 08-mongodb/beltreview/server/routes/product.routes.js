const ProductController = require("../controllers/product.controller")


module.exports = (app)=>{

    
//routes here(app.get or post or put or delete)
app.get("/api/hello", ProductController.sayHello);
app.get("/api/products", ProductController.findAllProducts);
app.post("/api/products", ProductController.createProduct);
// //find random jokes
// app.get("/api/jokes/random", JokeController.findRandomJoke)

app.get("/api/products/:id", ProductController.findOneProduct)
app.put("/api/products/:_id", ProductController.updateProduct)
app.delete("/api/products/:_id", ProductController.deleteProduct)

}