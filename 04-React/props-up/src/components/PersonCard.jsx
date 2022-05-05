import React, { useState } from 'react';

const PersonCard =(props)=> {
    const {firstName, lastName, hairColor, children} = props;
   //use state when you want a varabile to change in value and relfect that on page
    const [age, setAge] = useState(props.age);


    const increaseBirthday=()=>{
                setAge(age+1)
            }

    return(
    <>
        <div>
          
            <h2>{lastName},{firstName} </h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            {/* <p>Price: {this.state.price} </p> */}
            {/* <p>Calories:{cals} </p> */}
            {/* {children} */}
            {/* <button onClick={()=> this.setState({price: this.state.price+1})}>Inflation for {name}</button> another way to put the function in the button */}
            <button onClick={increaseBirthday}>Happy birthday {firstName}, have a year</button>
        </div>

        </>
    )
}

export default PersonCard;
