import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios';


const OneProduct=()=>{

    const { _id } = useParams();

    //set varaible to store the one product in we get back from the api call
    const [productInfo, setProductInfo] = useState({})
    
    useEffect(()=>{
    axios.get(`http://localhost:8000/api/products/${_id}`)
        .then(res=>{
            console.log(res);
            setProductInfo(res.data.results)
        })
        .catch(err=>console.log(err))    
    }, [])
    
    
  
    return (

      <div>
          <h1>test</h1>
          <h4> Title: {productInfo.title}</h4>
          <h4> Price: {productInfo.price}</h4>
          <h4> Description: {productInfo.description}</h4>
          
        </div>
            
    );
 
}

export default OneProduct;