import React from 'react';
import { useParams } from 'react-router';

const Home = ()=> {

    // const { id, color } = useParams();
    // console.log("id and color is --->", id, color)


    return (
        <>
        
        <h3>Welcome</h3>
        
        <hr />
        {/* <div style={{backgroundColor: color}}>

        
        {
            id === undefined? 
                <p>what is your favorite team?</p>: 

                isNaN(id)? 
                    id == "celtics"? <img src="https://www.insidesport.in/wp-content/uploads/2020/12/85379e26f54d887e027a62463ae23793.png" width="200px" alt="" />:
                    <h4>Displaying information team name is: {id} </h4> :
                    <h4>Display information team # is: {id} </h4>


        }
        </div> */}
        </>
    )


}

export default Home;