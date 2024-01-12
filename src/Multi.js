import {useState, useEffect} from 'react'

function Multi() {
    const [count, setCount] = useState(0);
    const [mul,setMul] = useState(0);
    useEffect(()=>{
    setMul(count * 10)
    },[count])
    return (
    <div>
    <h1>The value of count variable is: {count} </h1>
    <button onClick={()=>setCount((c)=>c + 1 )}><h1> Calculate</h1></button>
    <p>The result of mul is: {mul}</p>
    </div>
    );
    }
export default Multi