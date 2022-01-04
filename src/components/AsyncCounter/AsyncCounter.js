import React from "react";

const AsyncCounter = () =>{
    const [counter, setCounter ] = React.useState(0);
    const delayCount = ()=>{
        setTimeout(() => {
            setCounter(counter+1)
        },500)
        
    }
    return(
        <>
        <h1 data-testid = "AsyncCounter">{counter}</h1>
        <button data-testid = "up-button" onClick={delayCount}>Increment</button>
        <button data-testid = "down-button" onClick={() =>setCounter(counter-1)}>Decrement</button>
        </>
    );
};
export default AsyncCounter;
