import React, { useState } from 'react';

const Form = ()=>{

    // Create a state variable for each input that will store the information inside each input

let[name, setName] = useState("");
let[age, setAge] = useState("");
let[type, setType] = useState("");
let[date, setDate] = useState("");
let[imgUrl, setImgUrl] = useState("");
let[specialReq, setSpecialReq] = useState("");


    return (

        <>
            <h4>Form</h4>
            <form>
                <div className="form-group">
                    <label htmlFor=''>Name:</label>
                    <input text="text" name="" id="" className="form-control" onChange={(e)=>setName(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor=''>age:</label>
                    <input type="number" name="" id="" className="form-control"onChange={(e)=>setAge(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor=''>type:</label>
                    <select className="form-select" id="" onChange={(e)=>setType(e.target.value)}>              
                        <option value="dog">dog</option>
                        <option value="cat">cat</option>
                        <option value="brid">bird</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor=''>Date:</label>
                    <input type="date" name="" id="" className="form-control" onChange={(e)=>setDate(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor=''>Pet Image URL:</label>
                    <input type="text" name="" id="" className="form-control"onChange={(e)=>setImgUrl(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor=''>Special Request:</label>
                  <textarea className="form-control" id="" cols="30" row="10" onChange={(e)=>setSpecialReq(e.target.value)}></textarea>
                </div>
                <input className="btn btn-success" type="submit" value="submit"></input>

            </form>

        <hr/>
            <h3>Your pet Info</h3>
            <p>Pet name: {name}</p>
            <p>type: {type}</p>
            <p>Date: {date}</p>
            <p>Pic:<img src={imgUrl} alt="" width="250px" ></img> </p>
            <p>Special Request: {specialReq}</p>
        
        
        
        
        </>
    )
}


export default Form