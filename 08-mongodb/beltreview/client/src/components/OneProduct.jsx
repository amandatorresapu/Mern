import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom"
import axios from 'axios';


const OneProduct=()=>{

    const { _id } = useParams();

    //set varaible to store the one product in we get back from the api call
    const [productInfo, setProductInfo] = useState({})

    const history = useHistory(); //initialize history so we can redirect using history.push()

    
    useEffect(()=>{
    axios.get(`http://localhost:8000/api/products/${_id}`)
        .then(res=>{
            console.log(res);
            setProductInfo(res.data.results)
        //    history.push("/")
        })
        .catch(err=>console.log(err))    
    }, [])
    
    //when we click on delete, we want it to make a request to the back end to delete something. something based on the delete

    //delete

    const deleteProduct = ()=>{


        
            axios.delete(`http://localhost:8000/api/products/${_id}`)
                .then(res=>{
                    console.log(res);
                    setProductInfo(res.data.results)
                    history.push("/")
                })
                .catch(err=>console.log(err))    
            }

    
  
    return (

      <div>
          <h1>One product Page</h1>
          <h4> Title: {productInfo.title}</h4>
          <h4> Price: {productInfo.price}</h4>
          <h4> Description: {productInfo.description}</h4>
          <button onClick= {deleteProduct} className='btn btn-danger'>Delete</button>
          
        </div>
            
    );
 
}

export default OneProduct;