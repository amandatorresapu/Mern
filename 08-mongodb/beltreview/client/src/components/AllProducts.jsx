import React, {useState, useEffect} from 'react';
import axios from 'axios';



const AllProducts=()=>{

    const [allProducts, setAllProducts] = useState([])

    useEffect(()=>{
    axios.get("http://localhost:8000/api/products")
        .then(res =>{
            console.log("Response:", res);
            setAllProducts(res.data.results)
        })
        .catch(err=>{
            console.log("errrrrrr", err)
        })

    }, [])

    
  
    return (

      <div>
          <h1>all the products</h1>
          {
              allProducts.map((productsObj, idx)=>{
                  return (
                      
                            <div key={productsObj._id}>
                                <h5>Title: {productsObj.title}</h5>
                                <h5>Price: {productsObj.price}</h5>
                                <h5>Description: {productsObj.description}</h5>
                            </div>
                        
                  )
              })
          }
         


        </div>

    
            
    );
 
}

export default AllProducts;

