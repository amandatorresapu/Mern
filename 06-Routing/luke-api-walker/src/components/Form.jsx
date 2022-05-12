import React, { useState } from 'react'
import {useHistory} from "react-router-dom"



const Form =()=> {
  

let[category, setCategory] = useState();
let[id, setId] = useState();
const history = useHistory(); // use to redirect

//submit handler
const search = (e)=>{
    e.preventDefault()

    history.push(`/${category}/${id}`);
}

    return (
        <>
        <div>
                <form action="" onSubmit={search} className="d-flex p-1 justify-content-center align-items-center ">
                    <div className="form-group">
                        <label htmlFor="">Search for:</label>
                        <select name="" id="" className='form-select' onChange={(e)=>{setCategory(e.target.value)}} >
                            <option value="" disabled selected>Please select a category</option>
                            <option value="people">people</option>
                            <option value="films">Films</option>
                            <option value="planets">Planets</option>
                            <option value="species">Species</option>
                            <option value="vehicles">Vehicles</option>
                        </select>
                    </div>
                    <div className="form-group ">
                        <label htmlFor=''>ID</label>
                        <input type="number" name="" id="" className='form-control' onChange={(e)=>(setId(e.target.value))} />
                    
                    </div>
                    
                        <input type="submit" value="search" />
                  

                </form>

        </div>
        </>
    )
  
}

export default Form;
