// Form.js

import React, { useEffect } from 'react';
import { v4 as uuidV4 } from 'uuid';

const Form = ({ addText, setAddText, description, setDescription, list, setList, editList, setEditList }) => {
  const updateTodo = (title, description, id, completed) => {   //  aa update todo thi exiting item ne edit kai shakay
    const newTodo = list.map((todo) =>
      todo.id === id ? { title, description, id, completed } : todo    // ana je aapdi list hase ema ek pchi ek item add thay etle aa map kryu che 
    );
    setList(newTodo);// set as the new state using setList
    setEditList(null); // aa etle use kriye ke jayre aapde edit karvanu thai jase ne aapde ok click krshu to tyre e edit mode exit thse 
    setAddText('');
    setDescription(''); // aa bev to input filed ne set krse inital state per pacha
  };

  useEffect(() => {
    if (editList) {
      setAddText(editList.title);
      setDescription(editList.description);
    } else {
      setAddText('');
      setDescription('');
    }
  }, [setAddText, setDescription, editList]);

  const onAddTextChange = (e) => {
    setAddText(e.target.value);
  };
  //textchange, description change, ande form submit aa 3 e event handlers che 
  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editList) {
      setList([...list, { id: uuidV4(), title: addText, description, completed: false }]);//suppose aa false etle ! lagadelu che etle false evu batave k list empty che to new add karvani 
    } else {
      updateTodo(addText, description, editList.id, editList.completed);// ane jyare aapde edit per click krshu to je existing hase ene update krse 
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Enter your text here" value={addText} required
          onChange={onAddTextChange}
          className="task-name"
        />
        <input
          type="text"
          placeholder="Enter description" value={description} required onChange={onDescriptionChange}
          className="task-description"
        />
        <button type="submit" className="Add">
          {editList ? 'OK' : 'Add'}
        </button>
      </form>
    </div>
  );
};

export default Form;
