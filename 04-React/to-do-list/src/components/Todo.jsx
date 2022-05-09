import React, { useState } from 'react';

const ToDoForm=()=> {

    let[item, setItem] = useState("");
    let[specialAttention, setSpecialAttention] = useState(false)

    let[itemList, setItemList] = useState([]);


const submitList = (e) => {
        //the default behavior of a form when it is submitted, is to reload the page. we can prevent this from happening using preventDefault();
     e.preventDefault();

        //create a pet object (python dictionary) also called a hashmap 

    let list = {item, specialAttention}
    console.log("Item list looks like this-->", list)

       // use the setPetList setter to update the petList array to have the pet object inside of it
       setItemList([...itemList, list])

        // clear out the state variables so that we can use this to empty the form inputs
       setItem("");
      
    }    
const toggleAttention = (e, idx)=> {
        console.log("toggling pet at index number--->", idx)
        //we will modify the petList array at specific index-> idx so that the pet at that index has their "needs Attention" proper changed to true or false
        //1. make a copy of petList
        let [...copyList] = itemList;
        //2. change the pet at the specific index number property for speical attention to true/false
        copyList[idx].specialAttention = e.target.checked; //e.target.checked specifies if the checkbox is checke or not with a true/false value.
        // 3. update our state vaiable for petList with the modified copy
        setItemList(copyList);
    }

    const deleteItem = (e, idx)=> {
        console.log("deleting the pet at index -->", idx)
        //idx represents the index number of the pet we want to delete
       let filterCopy = itemList.filter((list, i)=>{
           //inside the filter function, i represents the index number of each pet
           return i !== idx //return back only the pets whose index number does not match the index number of the pet we want to delete
       })

       // 3. update our state vaiable for petList with the modified copy
       setItemList(filterCopy);

    }




return (
    <>
   
                <form onSubmit={submitList} >
                    <div className='form-group m-5'>
                            <label htmlFor="">To Do Item:</label>
                            <input text="text" className='form-control' onChange={(e)=>setItem(e.target.value)} value={item}></input>
                        <input className="btn btn-secondary"  type="submit" value="Add" ></input>
                    </div>
                </form>
                <hr />
                {
                    itemList.map((itemObj, idx)=>{
                        return(
                            <div key={idx} className="item-card">
                                
                                <p style={{textDecoration: itemObj.specialAttention? "black line-through": "none"}}> {itemObj.item}  <input type="checkbox" name="" id="" onChange={(e)=>toggleAttention(e,idx)} ></input> </p> 
                                <button onClick={(e) => {deleteItem(e, idx)}} className='btn btn-danger'>Delete</button>
                            </div>

                        )}
                    )
                }


    






    </>
    )



}

export default ToDoForm;