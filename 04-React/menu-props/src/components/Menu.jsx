import React, { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: this.props.price
        };
    }

    


    render (){
        //put the let with all the props, so you dont have to put it with the name as this.props.name, can just be nameß
        let {name, price,cals, children} = this.props;

      const increasePrice=()=>{
            this.state.price++;
            this.setState({ price: this.state.price })
        }
        
        return (<div>
            <h4>Item Name: {name} </h4>
            <p>Price: {this.state.price} </p>
            <p>Calories:{cals} </p>
            {children}
            {/* <button onClick={()=> this.setState({price: this.state.price+1})}>Inflation for {name}</button> another way to put the function in the button */}
            <button onClick={increasePrice}>Inflation for {name}</button>
        </div>
        )
    }
}

export default Menu;