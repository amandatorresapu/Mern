import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import {
    
    Link 
  } from "react-router-dom";
import axios from 'axios';

const EditAuthor =()=> {

const { _id } = useParams();

const [authorsInfo, setAuthorsInfo] = useState({});

const history = useHistory()

useEffect(()=>{
    axios.get(`http://localhost:8000/api/authors/${_id}`)
        .then(res=>{
            console.log("this is hte res-->", res)
            setAuthorsInfo(res.data.results)
        })
        .catch(err=>console.log(err))

}, [])

//the else if is for the checkbox
const changeHandler = (e)=>{

    if(e.target.type == "checkbox"){
            setAuthorsInfo({
            ...authorsInfo, [e.target.name]: e.target.checked
        }) 
    } else {
        setAuthorsInfo({
            ...authorsInfo, [e.target.name]: e.target.value
        }) 
    }
    

    }

const submitHandler = (e) =>{
    e.preventDefault();
    axios.put(`http://localhost:8000/api/authors/${_id}`, authorsInfo )
    .then(res=>{
        console.log("this is hte res-->", res)
        history.push("/")
    })
    .catch(err=>console.log(err))
}
    return (
        <>
       
        <h3>Edit Product: {_id}</h3>
        <Link to='/'>Home</Link>
         <form onSubmit={submitHandler} className="p-1 justify-content-center align-items-center" >
                        
                        <div className="form-group">
                        <label htmlFor=''>Author:</label>
                            <input type="text" name="name" onChange={changeHandler}  className='form-control' value={authorsInfo.name}  />
                         
                            
                        </div>
                        <div className="form-group ">
                            <label htmlFor=''>Books:</label>
                            <input type="number" name="books" onChange={changeHandler}   className='form-control' value={authorsInfo.books}  />
                            
                        </div>
                        <div className="form-group ">
                            <label htmlFor=''>Is Published:</label>
                            <input type="checkbox" name="isPublish" onChange={changeHandler} className='form-check-input' checked={authorsInfo.isPublish}   />
                        
                        </div>
                        
                            <input type="submit" value="Edit Product" className='btn btn-success' />
                    

                    </form>

                    <Link to='/'>Cancel</Link>
        
        
        
        
        
        </>
    )


}





export default EditAuthor;