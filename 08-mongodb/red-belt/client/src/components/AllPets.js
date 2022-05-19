import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    
    Link 
  } from "react-router-dom";

const AllPets = ()=> {

    const [allPets, setAllPets] = useState([])

    const[deleteToggle, setDeleteToggle] = useState(false);

    useEffect(()=>{
    axios.get("http://localhost:8000/api/redbelt")
        .then(res =>{
            console.log("Response:", res);
            setAllPets(res.data.results)
        })
        .catch(err=>{
            console.log("errrrrrr", err)
        })

    }, [deleteToggle]) 

    const deletePet = (_id)=> {
        console.log("delete the item")
        axios.delete(`http://localhost:8000/api/redbelt/${_id}`)
            .then(res=>{
                console.log("res after deleteing", res)
                setDeleteToggle(!deleteToggle)
            })
            .catch(err=> console.log(err))
    }







    return (

        <>
        <h1>These pets are looking for a good home</h1>
        {
              allPets.map((petsObj, idx)=>{
                  return (
                      
                            <div key={petsObj._id}>
                                <h5>Name: {petsObj.name}</h5>
                                <h5>Type/Breed: {petsObj.breed}</h5>
                                {/* <h5>Description: {petsObj.description}</h5> */}
                                <p><Link to={`/redbelt/${petsObj._id}`}className='btn btn-primary'>Details</Link></p>
                                <p><Link to={`/edit/${petsObj._id}`} className='btn btn-primary'>Edit</Link></p>
                                {/* <button className='btn btn-danger' onClick={(e)=>{deletePet(petsObj._id)}} >Adopt</button> */}
                                
                            </div>
                        
                        )
                    })
          }
      </>
    )
}

export default AllPets;