import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';

import axios from 'axios'


const Results =()=>{

    let { category, id} = useParams()

    //state varible to save the infor we get back from the api
    let[detail, setDetail]= useState({})

    //make an axios call to the starwars api using axios
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${category}/${id}/`)
        .then(response=>{
            console.log("response-->", response)

            setDetail(response.data);

    

        })
        .catch(err=>console.log(err))

    },[id, category])
   


    return(
        <>
            <div>
                {
                category == "people"?
                    <div>
                        
                       <h1>Name: {detail.name}</h1>
                        <h1>Mass: {detail.height}</h1>
                        <h1>Hair Color: {detail.mass}</h1>
                        <h1>Skin Color: {detail.hair_color}</h1> 
                    </div>: category == "planets"?
                    <div>
                        
                        <h1>Climate: {detail.climate}</h1>
                        <h1>Terrain: {detail.terrain}</h1>
                        <h1>Surface Water: {detail.surface_water}</h1>
                        <h1>Population: {detail.population}</h1> 
                    </div>:
                <h1>these are not the droids you are looking for</h1>


                    

                }
               
                
            </div>
        
        </>
        
       
    );

};

export default Results;