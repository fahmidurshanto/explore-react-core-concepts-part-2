import { useState } from "react";
export default function Counter(){
    const [count, setCount] = useState(0);
    const handleAdd = () =>{
       const newCount = count + 1;
       setCount(newCount)
    }
   const handleReduce = () =>{
        const newCount = count - 1;
        setCount(newCount)
   }
    return(
        <div style={{border: '2px solid purple',
        margin: '15 px',
        padding: '15px',
        borderRadius: '15px',
        marginTop: '15px'}}>
            <h3>Counter: {count}</h3>
            <button  onClick={handleAdd}>Add</button>
            
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}