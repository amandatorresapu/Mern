const Joke = require("../models/joke.model");



module.exports.sayHello = (req, res)=>{
    res.json({msg: "wazzap mongoose quotes api24"})
}
//find all ___

module.exports.findAllJokes = (req,res)=>{
    Joke.find()
        .then(allJokes=>res.json({results: allJokes}))
        .catch(err=>{res.json({msg:"something went wrong", error: err})
    })
}
//create joke
module.exports.createJoke = (req, res)=> {
    //req.body represent form information
    Joke.create(req.body)
    .then(newlyCreatedJoke=>{
        res.json({results: newlyCreatedJoke })
        })
    .catch(err=>{res.json({msg:"something went wrong", error: err})
     })
}
//find one joke
module.exports.findOneJoke = (req, res)=> {
    //req.body represent form information
    Joke.findOne({_id: req.params.id})
    .then(oneJoke=>{
        res.json({results: oneJoke })
        })
    .catch(err=>{res.json({msg:"something went wrong", error: err})
     })
}

module.exports.updateJoke = (req, res)=> {
    //
    Joke.findOneAndUpdate(
        {_id: req.params._id}, //specify which quote to update
         req.body, //specify the form informion to update the quote with
         { new: true, runValidators: true })
    .then(updateOne=>{
        res.json({results: updateOne })
        })
    .catch(err=>{res.json({msg:"something went wrong", error: err})
     })
}

module.exports.deleteJoke = (req, res)=> {
    //
    Joke.deleteOne({_id: req.params._id})
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