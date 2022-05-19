import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import {
    
    Link 
  } from "react-router-dom";
import axios from 'axios';

const EditPets =()=> {

const { _id } = useParams();

const [petsInfo, setPetsInfo] = useState({});

const history = useHistory()

useEffect(()=>{
    axios.get(`http://localhost:8000/api/redbelt/${_id}`)
        .then(res=>{
            console.log("this is hte res-->", res)
            setPetsInfo(res.data.results)
        })
        .catch(err=>console.log(err))

}, [])

//the else if is for the checkbox
const changeHandler = (e)=>{

            setPetsInfo({
            ...petsInfo, [e.target.name]: e.target.value
        }) 
    
    

    }

const submitHandler = (e) =>{
    e.preventDefault();
    axios.put(`http://localhost:8000/api/redbelt/${_id}`, petsInfo )
    .then(res=>{
        console.log("this is hte res-->", res)
        history.push("/")
    })
    .catch(err=>console.log(err))
}
    return (
        <>
       
        <h3>Edit  {petsInfo.name}</h3>
        <Link to='/'>Home</Link>
         <form onSubmit={submitHandler} className="p-1 justify-content-center align-items-center" >
                        
                        <div className="form-group">
                        <label htmlFor=''>Author:</label>
                            <input type="text" name="name" onChange={changeHandler}  className='form-control' value={petsInfo.name}  />
                         
                            
                        </div>
                        <div className="form-group ">
                            <label htmlFor=''>Breed/type:</label>
                            <input type="text" name="breed" onChange={changeHandler}   className='form-control' value={petsInfo.breed}  />
                            
                        </div>

                        <div className="form-group ">
                            <label htmlFor=''>Description:</label>
                            <input type="text" name="description" onChange={changeHandler}   className='form-control' value={petsInfo.description}  />
                            
                        </div>

                        <div className="form-group ">
                            <label htmlFor=''>skill 1:</label>
                            <input type="text" name="skill1" onChange={changeHandler}   className='form-control' value={petsInfo.skill1}  />
                            
                        </div>
                        <div className="form-group ">
                            <label htmlFor=''>skill 2:</label>
                            <input type="text" name="skill2" onChange={changeHandler}   className='form-control' value={petsInfo.skill2}  />
                            
                        </div>
                        <div className="form-group ">
                            <label htmlFor=''>skill 3:</label>
                            <input type="text" name="skill3" onChange={changeHandler}   className='form-control' value={petsInfo.skill3}  />
                            
                        </div>
                        
                        
                            <input type="submit" value="Edit Pet information" className='btn btn-success' />
                    

                    </form>

                    <Link to='/'>Cancel</Link>
        
        
        
        
        
        </>
    )


}





export default EditPets;