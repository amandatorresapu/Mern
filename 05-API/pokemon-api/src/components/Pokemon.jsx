import React, {useState} from 'react';
import axios from 'axios';


const Pokemon = () => {

let [pokemonList, setPokemonList]= useState([])



    const getPokemon = () =>{
        console.log("getting the Pokemon now")
        console.log("1");
        //fetch gives back a promise. a promise is a set of code that is asynchronious (it does not go from line to line) where the response time is not exact and we can allow it to perform some task or run some code while it is wating to get bak the response.  when it gets back the reponse, we can tell it what to do in the .then()

        // **ANOLOGY- you are throwing a ball to your dog, waiting for them to get it...while your dog is doing that, you  are multi tasking, and texting or talking to  someone
        // **the dog fetching the ball... 
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0")
            .then( response=>{
              //always log the reponse!!!
                console.log("got the response-->", response.data.results) // when dog gets the ball back/ reponse back
                 setPokemonList(response.data.results)
                }
                
            )
            .catch(err=>{  //.catch  if there is any issues getting the data
            
                console.log(err)
            })
        // **while waiting for the dog to fetch,  you are doing stuff.. here!       
        console.log("4");
        console.log("doing other stuff while waiting for the api to come back")
        //doing other stuff while we wait for the api to load up
    }

    return (
        <>
        <div className='pokemon-card'>
        <button onClick={getPokemon}> Get Pokemon List</button>

        {
             pokemonList && pokemonList.map((pokemon, idx)=>{
                    return (
                    <div key={idx}>
                        <h3>{pokemon.name}</h3>
                    </div>
                     )
                 })
             }



        </div>
        
        
        
        
        </>
    )
}


export default Pokemon