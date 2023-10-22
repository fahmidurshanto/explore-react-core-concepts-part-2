import { useState } from "react";
export default function Team(){
    const teamStyle = {
        border: '2px solid purple',
        margin: '15 px',
        padding: '15px',
        borderRadius: '15px'
    }

      const [count, setCount] = useState(0);

    const addPlayer = () => {
        const newPlayer = count + 1;
        setCount(newPlayer)
    }

    const removePlayer = () =>{
        const newPlayer = count - 1;
        setCount(newPlayer)
    }

    return(
        <div style={teamStyle}>
            <h3>Players: {count}</h3>
            <button onClick={addPlayer}>Add Player</button>
            <button onClick={removePlayer}>Remove Player</button>
        </div>
    )
}