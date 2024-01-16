// App.js

import React, { useState} from 'react';
import Form from './Form';
import Displayitem from './Displayitem';
import './App.css';

function App() {
  const [addText, setAddText] = useState('');
  const [description, setDescription] = useState('');
  const [list, setList] = useState([]);
  const [editList, setEditList] = useState(null);


  return (
    <>
    <div className="container">
      <Form
        addText={addText}
        setAddText={setAddText}
        description={description}
        setDescription={setDescription}
        list={list}
        setList={setList}
        editList={editList}
        setEditList={setEditList}
      />
   
    </div>
    <div>
    <Displayitem list={list} setList={setList} setEditList={setEditList} />
    </div>
    </>
  );
}

export default App;
