const Author = require("../models/author.model");



module.exports.sayHello = (req, res)=>{
    res.json({msg: "wazzap mongoose quotes api24"})
}
//find all ___

module.exports.findAllAuthors = (req,res)=>{
    Author.find()
        .then(allAuthors=>res.json({results: allAuthors}))
        .catch(err=>{res.json({msg:"something went wrong", error: err})
    })
}
//create joke
module.exports.createAuthor = (req, res)=> {
    //req.body represent form information
    Author.create(req.body)
    .then(newlyCreatedAuthor=>{
        res.json({results: newlyCreatedAuthor })
        })
    .catch(err=>{res.json({msg:"something went wrong", error: err})
     })
}
//find one joke
module.exports.findOneAuthor = (req, res)=> {
    //req.body represent form information
    Author.findOne({_id: req.params._id})
    .then(oneAuthor=>{
        
        res.json({results: oneAuthor })
        })
    .catch(err=>{res.json({msg:"something went wrong", error: err})
     })
}

module.exports.updateAuthor = (req, res)=> {
    //
    Author.findOneAndUpdate(
        {_id: req.params._id}, //specify which quote to update
         req.body, //specify the form informion to update the quote with
         { new: true, runValidators: true })
    .then(updateOne=>{
        res.json({results: updateOne })
        })
    .catch(err=>{res.json({msg:"something went wrong", error: err})
     })
}

module.exports.deleteAuthor = (req, res)=> {
    //
    Author.deleteOne({_id: req.params._id})
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