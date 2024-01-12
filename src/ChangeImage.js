import { useState } from "react";


function ChangeImage() {
    const[image,setImage]=useState('https://www.gizmochina.com/wp-content/uploads/2023/07/Android-14-1-1.webp');

    const change=()=>{
        setImage('https://d2ms8rpfqc4h24.cloudfront.net/React_18_New_features_a9ebb05f34.jpg');
    }
  return (
    <>
    <div className="container">
    <div ><img src={image} alt="Puppy" width='150px' height='150px'className="newImg" />
    </div>
    <div>
    <button onClick={change} className="btnimg" ><b>Changing Image</b></button>
    </div>
    </div>
</>
  )
}

export default ChangeImage