import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import {
    
    Link 
  } from "react-router-dom";

const Form=()=>{

  
    let [name, setName] = useState("");
    let [books, setBooks] = useState("");
    let [isPublish, setIsPublish] = useState(false);
    
    const history = useHistory()

    //state variable to store validation errors inside of
    let [errors, setErrors] = useState({});

    //form submit handler
    const addAuthor = (e)=>{
        e.preventDefault();

    // package up in an object
        let formInfo= { name, isPublish, books }

        axios.post("http://localhost:8000/api/authors", formInfo)
            .then(res=>{
                console.log("response after posting form-->", res)
               

                if(res.data.error){
                    //this means there are validatoin errors we need to save
                    setErrors(res.data.error.errors)

                }
                else { // else means no errors if you dont have any errors
                  //clear out the state variable to clear out the form
                setName("");
                setBooks("");
                setIsPublish(false);

                history.push("/")
                }

           

            })
            .catch(err=>console.log("errr", err))

          

    }


    return (
        <>
        <div>
        <Link to='/'>Home</Link>
                <h1>Add new Author</h1>
                    <form onSubmit={addAuthor} className="p-1 justify-content-center align-items-center" >
                        
                        <div className="form-group">
                        <label htmlFor=''>Name:</label>
                            <input type="text" onChange={(e)=>setName(e.target.value)} className='form-control' value={name}  />
                          <p>{errors.name?.message}</p>
                            
                        </div>
                        <div className="form-group">
                        <label htmlFor=''>Books:</label>
                            <input type="text" onChange={(e)=>setBooks(e.target.value)} className='form-control' value={books}  />
                            <p>{errors.books?.message}</p>
                            
                        </div>

                        <div className="form-group">
                        <label htmlFor=''>Checked if published:</label>
                            <input type="checkbox" onChange={(e)=>setIsPublish(e.target.checked)} className='form-check-input ' value={isPublish}  />
                         
                            
                        </div>
                        
                        
                            <input type="submit" value="Create Author" className='btn btn-success mt-3' />
                    

                    </form>
                    <Link to='/'>Cancel</Link>

        </div>
        <hr />
        </>
    )

}
    
  


export default Form;