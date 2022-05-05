import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }

    render (){
        //put the let with all the props, so you dont have to put it with the name as this.props.name, can just be nameß
        let {firstName, lastName,age, hairColor, children} = this.props;

      const increaseBirthday=()=>{
            this.state.age++;
            this.setState({ Age: this.state.age })
        }
        
        return (<div>
          
            <h2>{lastName},{firstName} </h2>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {hairColor}</p>
            {/* <p>Price: {this.state.price} </p> */}
            {/* <p>Calories:{cals} </p> */}
            {/* {children} */}
            {/* <button onClick={()=> this.setState({price: this.state.price+1})}>Inflation for {name}</button> another way to put the function in the button */}
            <button onClick={increaseBirthday}>Happy birthday {firstName}, have a year</button>
        </div>
        )
    }
}

export default PersonCard;