import react, {useState} from 'react';



const Cats = ()=>{
    let [catList, setCatList]= useState([])

    const getCats = ()=>{
        console.log("getting the coins now")

        fetch("https://api.thecatapi.com/v1/images/search")
            .then(response=>{
                return response.json()
            })
            .then( response=>{
                console.log("got the response-->", response)
                setCatList(response)
            }
            )
            .catch(err=>{
                console.log(err)
            })



    }



    return (
        <div>
            <button onClick = {getCats} >click to get a cat photo!</button>
            {
                catList.map((cat, idx)=>{
                    return (
                        <div key={idx}>
                        
                        <p><img src={cat.url} alt="" /></p>
                        </div>
                
                })
            }
        </div>
    )
}

export default Cats;

