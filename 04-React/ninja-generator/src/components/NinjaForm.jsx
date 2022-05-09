import React, { useState } from 'react';

const NinjaForm = ()=>{

    //create a state varialbe for each input for the form we want to collect

    let[name, setName] = useState("");
    let[proPicUrl, setProPicUrl] = useState("");
    let[color, setColor] = useState("");
    let[specialAttention, setSpecialAttention] = useState(false)

    // create state variable array which is an array so we can store all the pets that get submitted into it
    let [petList, setPetList] = useState([]); 

    



    //i want the state variable to update their value (setters, --the second one in the code above) whenever the inputs are changed (onChanged) on button input.

    //Create a submit handler

    const submitPet = (e) => {
        //the default behavior of a form when it is submitted, is to reload the page. we can prevent this from happening using preventDefault();
        e.preventDefault();

        //create a pet object (python dictionary) also called a hashmap 

        let pet = {name, proPicUrl, color, specialAttention}
        console.log("pet looks like this-->", pet)

       // use the setPetList setter to update the petList array to have the pet object inside of it
       setPetList([...petList, pet])

        // clear out the state variables so that we can use this to empty the form inputs
       setName("");
       setColor("");
       setProPicUrl("")
    }


    //function to toggle/checkbox if the pet needs spical attetion from faluse to true and vice versa

    const toggleAttention = (e, idx)=> {
        console.log("toggling pet at index number--->", idx)
        //we will modify the petList array at specific index-> idx so that the pet at that index has their "needs Attention" proper changed to true or false
        //1. make a copy of petList
        let [...copyList] = petList;
        //2. change the pet at the specific index number property for speical attention to true/false
        copyList[idx].specialAttention = e.target.checked; //e.target.checked specifies if the checkbox is checke or not with a true/false value.
        // 3. update our state vaiable for petList with the modified copy
        setPetList(copyList);
    }

    const deletePet = (e, idx)=> {
        console.log("deleting the pet at index -->", idx)
        //idx represents the index number of the pet we want to delete
       let filterCopy = petList.filter((pet, i)=>{
           //inside the filter function, i represents the index number of each pet
           return i !== idx //return back only the pets whose index number does not match the index number of the pet we want to delete
       })

       // 3. update our state vaiable for petList with the modified copy
       setPetList(filterCopy);

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
                            <h1 >{petObj.name}</h1>
                           <p style={{textDecoration: petObj.specialAttention? "white line-through": "none"}}> Special attention needed: <input type="checkbox" name="" id="" onChange={(e)=>toggleAttention(e,idx)} ></input> </p> 
                           <p>belt color {petObj.color}</p>
                            <p><button onClick={(e) => {deletePet(e, idx)}} className='btn btn-danger'>Delete</button></p>
                            <img src={petObj.proPicUrl} width="250px" alt=""></img>
                           

                        
                        </div>
                        )}
                    )
                }

                </div>


        </>
        
      
    )



}

export default NinjaForm;