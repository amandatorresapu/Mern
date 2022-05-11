import React from 'react';
import { useParams } from 'react-router';

const Number = ()=> {

    const { id, color , color1} = useParams();
    console.log("id or  --->", id, color, color1)


    return (
        <>
        
        <h3>Numbers and words</h3>
       
        <hr />
        <div style={{backgroundColor: color, color: color1}}>

        
        {
            id === undefined? 
                <p>What is your favorite number?</p>: 

                isNaN(id)? 
                    <h4>Displaying information team name is: {id} </h4> :
                    <h4>Display information team # is: {id} </h4>


        }
        </div>
        </>
    )


}

export default Number;