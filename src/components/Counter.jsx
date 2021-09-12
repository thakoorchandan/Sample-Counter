import React from "react";
import "./Counter.css"

function Counter(){
    const [count,setCount] = React.useState(0);

    const handleChange = (value)=>{
        setCount(count+value)
    }

    return(
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <div className="main">
            <button onClick={(e)=>handleChange(1)}>Add</button>
            <button onClick={(e)=>handleChange(-1)}>Reduce</button>
            <button onClick={(e)=>handleChange(count)}>Double</button>
            </div>
        </div>
    );
}

export default Counter;