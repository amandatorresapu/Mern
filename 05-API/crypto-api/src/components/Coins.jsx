import React, {useEffect, useState} from 'react';

import axios from 'axios';

const Coins = ()=>{

    //create a variable to store all the coins in that we get back
    let [coinList, setCoinList]= useState([])

    let [update, setUpdate] = useState(0)

    useEffect(()=>{
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then( response=>{
          //always log the reponse!!!
            console.log("got the response-->", response) // when dog gets the ball back/ reponse back
            setCoinList(response.data)
            }
            
        )
        .catch(err=>{  //.catch  if there is any issues getting the data
        
            console.log(err)
        })
    // **while waiting for the dog to fetch,  you are doing stuff.. here!       
    console.log("4");
    console.log("doing other stuff while waiting for the api to come back")
    //doing other stuff while we wait for the api to load up

    //dependance array, will run the code when you Onclick the button. will not infinately run the code! the use effect
    }, [update])

    
    
    return (
        <>
            <div>
                <button onClick={()=>setUpdate(update+1)} > Click to update</button>
                <h1>I have updated the price {update} times</h1>
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