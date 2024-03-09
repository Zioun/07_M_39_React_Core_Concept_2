import { useState } from "react"

export default function Counter({}){
    const [count, setCount] = useState(0);
    const increase = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }
    const decrease = () =>{
        const newCount = count - 1;
        setCount(newCount);
    }
    return(
        <>
            <h2>Counter : {count}</h2>
            <button style={{background: 'green', color:'white'}} onClick={increase} >Count +</button>
            <button style={{background: 'red', color:'white'}} onClick={decrease}>Count -</button>
        </>
    )
}