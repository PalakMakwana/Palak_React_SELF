import {useState, useEffect} from 'react'

function Efect() {

const[count,setCount]=useState(0);

useEffect(()=>{
    const interval = setInterval(()=>{
        setCount(count+1);
    }, 2000);
},[count]);
  return (
    <div><h1>The counter value is :{count}</h1>
    </div>
    
  )
}

export default Efect