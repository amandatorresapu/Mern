import React, { useState } from 'react';

const FormTemplate = () =>{

    let[firstname, setFirstName] = useState("");
    const [firstNameWarning, setFirstNameWarning] = useState(false)
    let[lastname, setLastName] = useState("");
    let[email, setEmail] = useState("");
    let[password, setPassword] = useState("");
    const [passwordwarning, setPasswordWarning] = useState(false)
    let[confirm, setConfirm] = useState("");
    const [confirmwarning, setConfirmWarning] = useState(false)

    let[personList, setPersonList] = useState ([]);

        //a way to do validation for each property, but you can also do it inline if you wanted. If you want to reuse this fucntion then do it this way. If not do it inline
    const showNameError = e => {
        setFirstName(e.target.value)
        if(firstname.length<2){
            setFirstNameWarning (<p className='text-danger'>Name must be at lest three characters!</p>)
        } else {
            setFirstNameWarning(false)
        }
            
    }


    const validatePassword = e => {
        setPassword(e.target.value)
        if (e.target.value.length < 8) {
                            setPasswordWarning('Password must be greater than 8 characters!')
                            } else if (e.target.value !== confirm) {
                            setPasswordWarning('Password and confirm password must match!')
                            } else {
                            setPasswordWarning(false)
                            } 
    }

    const validateConfirm = e => {
        setConfirm(e.target.value)
        if (e.target.value.length < 8) {
                            setConfirmWarning(' confirm Password must be greater than 8 characters!')
                            } else if (e.target.value !== password) {
                            setConfirmWarning('Passwords must match!')
                            } else {
                            setConfirmWarning(false)
                            } 
    }



    const submitForm = (e) => {
        //the default behavior of a form when it is submitted, is to reload the page. we can prevent this from happening using preventDefault();
        e.preventDefault();

        //create a pet object (python dictionary) also called a hashmap 

        let person = {firstname, lastname,email, password, confirm}
        console.log("pet looks like this-->", person)

       // use the setPetList setter to update the petList array to have the pet object inside of it
       setPersonList([...personList, person])

       setFirstName("");
       setLastName("");
       setEmail("")
       setPassword("")
       setConfirm("")

    }


 
    return(
        <>
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label htmlFor=''>First Name:</label>
                    <input text="text" name="" id="" className="form-control" onChange={showNameError} value={firstname} ></input>
                    <div className='ms-5'>
                    {firstNameWarning ? (<p style={{ color: 'red' }}>{firstNameWarning}</p>) : ('')}
                </div>
                </div>
                <div className="form-group">
                    <label htmlFor=''>Last name:</label>
                    <input text="text" name="" id="" className="form-control"onChange={(e)=>{setLastName(e.target.value)}} value={lastname}  ></input>
                    {
                        lastname<2? <p className='text-danger'>Min lastname charaters of 2 is required</p> : null
                    }
                </div>
                <div className="form-group">
                    <label htmlFor=''>email:</label>
                    <input text="text" name="" id="" className="form-control"onChange={(e)=>{setEmail(e.target.value)}} value={email} ></input>
                    {
                        email<5? <p>Min email charaters of 5 is required</p> : null
                    }
                </div>
                <div className="form-group">
                    <label htmlFor=''>Password:</label>
                    <input text="text" name="" id="" className="form-control"onChange={validatePassword} value={password} ></input>
                    
                </div>
                <div className='ms-5'>
                {passwordwarning ? (<p style={{ color: 'red' }}>{passwordwarning}</p>) : ('')}
                </div>
                <div className="form-group">
                    <label htmlFor=''>Confirm Password:</label>
                    <input text="text" name="" id="" className="form-control"onChange={validateConfirm} value={confirm} ></input>  
                </div>
                <div className='ms-5'>
                    {confirmwarning ? (<p style={{ color: 'red' }}>{confirmwarning}</p>) : ('')}
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
                    <h1>{personObj.email}</h1>
                    
                    
                    </div>
                

                )})
            }
           
            </div> 
            


        </>
        
      
    )



}





export default FormTemplate;