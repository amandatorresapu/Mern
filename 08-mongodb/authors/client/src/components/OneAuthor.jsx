import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom"
import axios from 'axios';


const OneAuthor=()=>{

    const { _id } = useParams();

    //set varaible to store the one product in we get back from the api call
    const [authorInfo, setAuthorInfo] = useState({})

    const history = useHistory(); //initialize history so we can redirect using history.push()

    
    useEffect(()=>{
    axios.get(`http://localhost:8000/api/authors/${_id}`)
        .then(res=>{
            console.log(res);
            setAuthorInfo(res.data.results)
        
        })
        .catch(err=>console.log(err))    
    }, [])
    
    //when we click on delete, we want it to make a request to the back end to delete something. something based on the delete

    //delete

    const deleteAuthor = ()=>{
            axios.delete(`http://localhost:8000/api/authors/${_id}`)
                .then(res=>{
                    console.log(res);
                    setAuthorInfo(res.data.results)
                    history.push("/")
                })
                .catch(err=>console.log(err))    
            }

    
  
    return (

      <div>
          <h1>One product Page</h1>
          <h4> Title: {authorInfo.name}</h4>
          <h4> Published: {authorInfo.isPublished? "No": "yes"}</h4>
          <h4> Description: {authorInfo.books}</h4>
          <button onClick= {deleteAuthor} className='btn btn-danger'>Delete</button>
          
        </div>
            
    );
 
}

export default OneAuthor;