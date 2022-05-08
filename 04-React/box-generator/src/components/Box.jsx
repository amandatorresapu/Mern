import React, { useState } from 'react';


const BoxForm =() => {

    let [color, setColor] = useState();

    let [boxList, setBoxList]= useState([]);


//create submit handler

const submitColor = (e)=>{
    e.preventDefault();


    let colorbox = {color}
    console.log(colorbox)

    setBoxList([...boxList, colorbox])

    setColor("");

  
   

}


return (
    <>
        <form onSubmit={submitColor}>
            <div className='form-group'>
                    <label htmlFor="">color</label>
                    <input onChange={(e)=>{setColor(e.target.value)}} text="text" className='form-control' value={color}></input>
            </div>
                <input className="btn btn-success" type="submit" value="Make box color"></input>


            </form>
            <hr />
                <div className='box-list' >
                            {  /* how to loop through an object, must put in {} in whatever div you want to. map only works on arrays */}
                       
                        {
                            boxList.map((boxObj, idx)=>{ 
                            
                            return (
                                <div key={idx} className="box-card" style={{backgroundColor: boxObj.color}}>
                                <p>{boxObj.color}</p>
                                </div>
                            )})
                        }
                 </div>
        
    
    </>
    
  
);


}


export default BoxForm;