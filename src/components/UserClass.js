import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            count: 0,
            count2: 2/*
            we can create multiple state variables unlike functional components
            where we use useState() hook 
            */
        }//this is how we manage state of variables inside class based component
    }

    render(){
        const {name, location} = this.props;
        const {count, count2} = this.state;

        return(
            <div>
                <h1>count: {count}</h1>
                <button onClick={() => {
                 //NEVER EVER UPDATE STATE VARIABLES DIRECTLY  
                 this.setState({
                    count: this.state.count + 1,
                    count2: this.state.count2 + 2
                 });
                }}>Count Increase</button>
                <h1>count2: {count2}</h1>
                <h2>Name:{name}</h2>
                <h2>Loaction: {location}</h2>
            </div>
        )
    }
}

export default UserClass;