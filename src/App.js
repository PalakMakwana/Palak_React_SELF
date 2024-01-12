import { useState } from "react";
import "./App.css";
import Decrement from "./Decrement";
import ChangeImage from "./ChangeImage";
import Color from "./Color";
import Efect from "./Efect";
import Count1 from "./Count1";
import Multi from "./Multi";
function App() {

    const[count, setCount]=useState(10);

    function update(){
      setCount(count+1);
    }
  return (
    <div className="App">
      <button onClick={update} className="age">increment</button>
      <p><h1>My age is {count}</h1></p>
      <Decrement/>
      <ChangeImage/>
      <Color/>
      <Efect/>
      <Count1/>
      <Multi/>
    </div>
  );
}

export default App;
