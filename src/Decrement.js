import React from 'react'
import { useState } from 'react'
function Decrement() 
{
    const[operand,setOperand]=useState(0);
    
    const add=()=>{
        setOperand(operand+1);
    }
    const sub=()=>{
        if(operand<=0)
        {
            return setOperand(0);
        }
        else {
            setOperand(operand-1);
        }
    }
  return (
 
    <div className='operation'>
        <button onClick={sub} >Decrement</button>
        <h1 className='val'>{operand}</h1>
        <button onClick={add} >Increment</button>
    
    </div>
  )
}

export default Decrement