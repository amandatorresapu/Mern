const Product = require("../models/product.model");



module.exports.sayHello = (req, res)=>{
    res.json({msg: "wazzap mongoose quotes api24"})
}
//find all ___

module.exports.findAllProducts = (req,res)=>{
    Product.find()
        .then(allProducts=>res.json({results: allProducts}))
        .catch(err=>{res.json({msg:"something went wrong", error: err})
    })
}
//create joke
module.exports.createProduct = (req, res)=> {
    //req.body represent form information
    Product.create(req.body)
    .then(newlyCreatedProduct=>{
        res.json({results: newlyCreatedProduct })
        })
    .catch(err=>{res.json({msg:"something went wrong", error: err})
     })
}
//find one joke
module.exports.findOneProduct = (req, res)=> {
    //req.body represent form information
    Product.findOne({_id: req.params._id})
    .then(oneProduct=>{
        
        res.json({results: oneProduct })
        })
    .catch(err=>{res.json({msg:"something went wrong", error: err})
     })
}

module.exports.updateProduct = (req, res)=> {
    //
    Product.findOneAndUpdate(
        {_id: req.params._id}, //specify which quote to update
         req.body, //specify the form informion to update the quote with
         { new: true, runValidators: true })
    .then(updateOne=>{
        res.json({results: updateOne })
        })
    .catch(err=>{res.json({msg:"something went wrong", error: err})
     })
}

module.exports.deleteProduct = (req, res)=> {
    //
    Product.deleteOne({_id: req.params._id})
    .then(deleteOne=>{
        res.json({results: deleteOne })
        })
    .catch(err=>{res.json({msg:"something went wrong", error: err})
     })
}

// module.exports.findRandomJoke = (req,res)=>{
//     //get a random index number from index 0 up to but not including allJokes.length
//     let randomIdx = Math.floor(Math.random()* findAllJokes.length)

//     Joke.find()
//         .then(findRandJoke=>res.json({results: findRandJoke[randomIdx]}))
//         .catch(err=>{res.json({msg:"something went wrong", error: err})
//     })
// }