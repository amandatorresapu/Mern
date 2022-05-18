import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    
    Link 
  } from "react-router-dom";



const AllProducts=(props)=>{

    const [allProducts, setAllProducts] = useState([])

    const[deleteToggle, setDeleteToggle] = useState(false);

    useEffect(()=>{
    axios.get("http://localhost:8000/api/products")
        .then(res =>{
            console.log("Response:", res);
            setAllProducts(res.data.results)
        })
        .catch(err=>{
            console.log("errrrrrr", err)
        })

    }, [deleteToggle, props.formSubmitted])


  
    const deleteProduct = (_id)=> {
        console.log("delete the item")
        axios.delete(`http://localhost:8000/api/products/${_id}`)
            .then(res=>{
                console.log("res after deleteing", res)
                setDeleteToggle(!deleteToggle)
            })
            .catch(err=> console.log(err))
    }

    
  
    return (

      <div>
          <h1>All Products</h1>
          {
              allProducts.map((productsObj, idx)=>{
                  return (
                      
                            <div key={productsObj._id}>
                                <h5>Title/product: <a href={`/products/${productsObj._id}`}>{productsObj.title}</a> </h5>
                                <p><Link to={`/edit/${productsObj._id}`} className='btn btn-primary'>Edit {productsObj.title}</Link></p>
                                <button className='btn btn-danger' onClick={(e)=>{deleteProduct(productsObj._id)}} >Delete</button>
                                {/* <h5>Price: {productsObj.price}</h5>
                                <h5>Description: {productsObj.description}</h5> */}
                            </div>
                        
                  )
              })
          }
         


        </div>

    
            
    );
 
}

export default AllProducts;

