

import React from 'react';

const Displayitem = ({ list, setList, setEditList }) => {


  const handleEdit = ({ id }) => {
    const findTodo = list.find((todo) => todo.id === id);
    setEditList(findTodo);
  };

  const handleDelete = ({ id }) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (

    <>
    <div className="todo-container">
    {list.map((todo) => (
        <div className="todo-item" key={todo.id}>
          <div className="task-details">
            <div>
              <strong>Title:</strong> {todo.title}
            </div>
            <div>
              <strong>Description:</strong> {todo.description}
            </div>
          </div>
          <div className="button-group">
           
            <button className="editbtn" onClick={() => handleEdit(todo)}>
              Edit
            </button>
            <button className="Deletebtn" onClick={() => handleDelete(todo)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>




    </>
  );
};

export default Displayitem;


//--------------------------------------------------------------------------------------------------------------