import React, { useState } from 'react'

function event() {
        const [count,setCount] = useState(0);
            const Decre = () => {
                if(count!==0)
                setCount(count-1);
                else
                setCount(0);
        }
    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={() =>setCount(count+1)}>Inc</button>&emsp;
            <button onClick={Decre}>Dec</button>&emsp;
            <button onClick={() =>setCount(0)}>Reset</button>
        </div>
    )
}

export default event;
