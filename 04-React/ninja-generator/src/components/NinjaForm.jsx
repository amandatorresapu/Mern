import React, { useState } from 'react';

const NinjaForm = ()=>{

    //create a state varialbe for each input for the form we want to collect

    let[name, setName] = useState("");
    let[proPicUrl, setProPicUrl] = useState("");
    let[color, setColor] = useState("");

    // create state variable array which is an array so we can store all the pets that get submitted into it
    let [petList, setPetList] = useState([]); 

    



    //i want the state variable to update their value (setters, --the second one in the code above) whenever the inputs are changed (onChanged) on button input.

    //Create a submit handler

    const submitPet = (e) => {
        //the default behavior of a form when it is submitted, is to reload the page. we can prevent this from happening using preventDefault();
        e.preventDefault();

        //create a pet object (python dictionary) also called a hashmap 

        let pet = {name, proPicUrl, color}
        console.log("pet looks like this-->", pet)

       // use the setPetList setter to update the petList array to have the pet object inside of it
       setPetList([...petList, pet])

        // clear out the state variables so that we can use this to empty the form inputs
       setName("");
       setColor("");
       setProPicUrl("")
    }

    return(
        <>
        
       
            <form onSubmit={submitPet}>
                <div className="form-group">
                    <label htmlFor=''>Name:</label>
                    <input text="text" name="" id="" className="form-control" onChange={(e)=>setName(e.target.value)} value={name} ></input>
                    
                </div>
                <div className="form-group">
                    <label htmlFor=''>Profile pic URL:</label>
                    <input text="text" name="" id="" className="form-control"onChange={(e)=>setProPicUrl(e.target.value)} value={proPicUrl} ></input>
                    
                </div>
                <div className="form-group">
                    <label htmlFor=''>Belt color:</label>
                    <input text="text" name="" id="" className="form-control" onChange={(e)=>setColor(e.target.value)} value={color} ></input>
                    
                </div>
                
                <input className="btn btn-success" type="submit" value="submit"></input>

            </form>
            <hr/>
        {/* how we loop through an object and display it, .map only works on arrays */}
        <div className="pet-list">
        {
            petList.map((petObj, idx)=>{ 
            
            return (
                <div key={idx} className="pet-card" style={{backgroundColor: petObj.color}}>
                   <h1>{petObj.name}</h1>
                   <img src={petObj.proPicUrl} width="250px"></img>
                   
                </div>
            

            )
            
            
        
        })
        }

</div>


        </>
        
      
    )



}

export default NinjaForm;