import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {
    
    Link 
  } from "react-router-dom";

const AllAuthors=()=>{

    const [allAuthors, setAllAuthors] = useState([])

    const[deleteToggle, setDeleteToggle] = useState(false);

    useEffect(()=>{
    axios.get("http://localhost:8000/api/authors")
        .then(res =>{
            console.log("Response:", res);
            setAllAuthors(res.data.results)
        })
        .catch(err=>{
            console.log("errrrrrr", err)
        })

    }, [deleteToggle]) 

    const deleteAuthor = (_id)=> {
        console.log("delete the item")
        axios.delete(`http://localhost:8000/api/authors/${_id}`)
            .then(res=>{
                console.log("res after deleteing", res)
                setDeleteToggle(!deleteToggle)
            })
            .catch(err=> console.log(err))
    }



  return (
      <>
        <h1>All the authors</h1>
        {
              allAuthors.map((authorsObj, idx)=>{
                  return (
                      
                            <div key={authorsObj._id}>
                                <h5>Name: <a href={`/authors/${authorsObj._id}`}>{authorsObj.name}</a></h5>
                                <h5>Published: {authorsObj.isPublish? "yes": "No"}</h5>
                                <h5>Books written: {authorsObj.books}</h5>
                                <p><Link to={`/edit/${authorsObj._id}`} className='btn btn-primary'>Edit</Link></p>
                                <button className='btn btn-danger' onClick={(e)=>{deleteAuthor(authorsObj._id)}} >Delete</button>
                                
                            </div>
                        
                        )
                    })
          }
      </>
    
  )
}

export default AllAuthors;
