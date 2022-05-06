import React, { useState } from 'react';

const FormTemplate = () =>{

    let[firstname, setFirstName] = useState("");
    let[lastname, setLastName] = useState("");
    let[email, setEmail] = useState("");
    let[password, setPassword] = useState("");
    let[confirm, setConfirm] = useState("");

    let[personList, setPersonList] = useState ([]);

    const submitForm = (e) => {
        //the default behavior of a form when it is submitted, is to reload the page. we can prevent this from happening using preventDefault();
        e.preventDefault();

        //create a pet object (python dictionary) also called a hashmap 

        let person = {firstname, lastname,email, password, confirm}
        console.log("pet looks like this-->", person)

       // use the setPetList setter to update the petList array to have the pet object inside of it
       setPersonList([...personList, person])
    }


 
    return(
        <>
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label htmlFor=''>First Name:</label>
                    <input text="text" name="" id="" className="form-control" onChange={(e)=>setFirstName(e.target.value)} ></input>
                    {
                        firstname<2? <p>Min name charaters of 2 is required</p> : null
                    }
                </div>
                <div className="form-group">
                    <label htmlFor=''>Last name:</label>
                    <input text="text" name="" id="" className="form-control"onChange={(e)=>setLastName(e.target.value)} ></input>
                    {
                        lastname<2? <p>Min lastname charaters of 2 is required</p> : null
                    }
                </div>
                <div className="form-group">
                    <label htmlFor=''>email:</label>
                    <input text="text" name="" id="" className="form-control"onChange={(e)=>setEmail(e.target.value)} ></input>
                    {
                        email<5? <p>Min email charaters of 5 is required</p> : null
                    }
                </div>
                <div className="form-group">
                    <label htmlFor=''>Password:</label>
                    <input text="text" name="" id="" className="form-control"onChange={(e)=>setPassword(e.target.value)} ></input>
                    {
                        password<8? <p>Min password charaters of 8 is required</p> : null
                    }
                </div>
                <div className="form-group">
                    <label htmlFor=''>Confirm Password:</label>
                    <input text="text" name="" id="" className="form-control"onChange={(e)=>setConfirm(e.target.value)} ></input>
                    {
                        confirm<8? <p>Min confirm password charaters of 8 is required</p> : null
                    }
                </div>
                
                
                <input className="btn btn-success" type="submit" value="submit"></input>

            </form>
            <hr/>
            {/* how we loop through an object and display it, .map only works on arrays */}
            <div>
            {
                personList.map((personObj, idx)=>{ 
                
                return (
                    <div >
                    <h1>{personObj.firstname}</h1>
                    <h1>{personObj.lastname}</h1>
                    
                    
                    </div>
                

                )})
            }
           
            </div> 
            


        </>
        
      
    )



}





export default FormTemplate;