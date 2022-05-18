import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import axios from 'axios';

const EditProductForm =()=> {

const { _id } = useParams();

const [productInfo, setProductInfo] = useState({});

const history = useHistory()


useEffect(()=>{
    axios.get(`http://localhost:8000/api/products/${_id}`)
        .then(res=>{
            console.log("this is hte res-->", res)
            setProductInfo(res.data.results)
        })
        .catch(err=>console.log(err))

}, [])

const changeHandler = (e)=>{
    setProductInfo({
        ...productInfo, [e.target.name]: e.target.value
    })

}

const submitHandler = (e) =>{
    e.preventDefault();
    axios.put(`http://localhost:8000/api/products/${_id}`, productInfo )
    .then(res=>{
        console.log("this is hte res-->", res)
        history.push("/")
    })
    .catch(err=>console.log(err))


}

    return (
        <>
       
        <h3>Edit Product: {_id}</h3>
         <form onSubmit={submitHandler} className="p-1 justify-content-center align-items-center" >
                        
                        <div className="form-group">
                        <label htmlFor=''>Title:</label>
                            <input type="text" name="title" onChange={changeHandler}  className='form-control' value={productInfo.title}  />
                         
                            
                        </div>
                        <div className="form-group ">
                            <label htmlFor=''>Price:</label>
                            <input type="number" name="price" onChange={changeHandler}   className='form-control' value={productInfo.price}  />
                            
                        </div>
                        <div className="form-group ">
                            <label htmlFor=''>Description:</label>
                            <input text="text" name="description" onChange={changeHandler} className='form-control' value={productInfo.description}   />
                        
                        </div>
                        
                            <input type="submit" value="Edit Product" className='btn btn-success' />
                    

                    </form>
        
        
        
        
        
        </>
    )


}





export default EditProductForm;