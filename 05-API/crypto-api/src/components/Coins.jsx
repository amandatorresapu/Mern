import React, {useState} from 'react';

const Coins = ()=>{

    //create a variable to store all the coins in that we get back
    let [coinList, setCoinList]= useState([])

    const getCoins = () =>{
        console.log("getting the coins now")
        console.log("1");
        //fetch gives back a promise. a promise is a set of code that is asynchronious (it does not go from line to line) where the response time is not exact and we can allow it to perform some task or run some code while it is wating to get bak the response.  when it gets back the reponse, we can tell it what to do in the .then()

        // **ANOLOGY- you are throwing a ball to your dog, waiting for them to get it...while your dog is doing that, you  are multi tasking, and texting or talking to  someone
        // **the dog fetching the ball... 
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(response =>{ // .then  means whenever the api is done getting back the data
              
                return response.json() // convert to json that our application can read
            })
            .then( response=>{
              //always log the reponse!!!
                console.log("got the response-->", response) // when dog gets the ball back/ reponse back
                setCoinList(response)
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
            <div>
                <button onClick={getCoins}> click me to get the latest information</button>

                {
                 
                    coinList.map((coin, idx)=>{
                        return (
                           <div key={idx}>
                            <h3>{coin.name}</h3>
                            <p>Price: $ {coin.current_price}</p>
                            <p><img src={coin.image} alt="" /></p>
                           </div>
                        )
                    })
                }

            </div>
            
        </>   
    )

}

export default Coins;