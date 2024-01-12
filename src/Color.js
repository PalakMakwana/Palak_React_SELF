import {useState} from 'react'

function Color() {
    const[color,setColor]=useState('red');

    const changecolor=()=>{
        setColor('green');
    }
  return (<>
    <div>
        <h1 style={{background:color}}>Good Morning!</h1>

    </div>
    <div>
        <button onClick={changecolor}><h1>Change Background</h1></button>
    </div>
    </>
    )
}

export default Color