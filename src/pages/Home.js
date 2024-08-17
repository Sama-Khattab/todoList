import React from "react";
import { useState } from "react";
import "../assets/css/pagesStyle.css";
import { Link } from "react-router-dom";

const Home =()=>{
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingValue, setEditingValue] = useState('');


  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          handleAddTodo();
        }
      };
  
    const handleDeleteTodo = (index) => {
      const newTodos = todos.filter((_, i) => i !== index);
      setTodos(newTodos);
   
    };
    const handleAddTodo = () => {
      if (inputValue.trim() !== '') {
        setTodos([...todos, { text: inputValue, completed: false }]);
        setInputValue('');
     
      }
    };
    
    const handleToggleCompleted = (index) => {
      const newTodos = [...todos];
      newTodos[index].completed = !newTodos[index].completed;
      setTodos(newTodos);
    };
      
    //  const handleEdit = (index) => {
    //    setEditingIndex(index);
      //  setEditingValue(todos[index].text);
    //  };
    
    //  const handleSaveEdit = (index) => {
      //  const newTodos = [...todos];
      //  newTodos[index].text = editingValue;
        //setTodos(newTodos);
        //setEditingIndex(null);
     // };
    
     // const handleCancelEdit = () => {
        //setEditingIndex(null);
       // };
    
 
       
       const handleEdit = (index) => {
         setEditingIndex(index);
         setEditingValue(todos[index].text);
       };
       
       const handleSaveEdit = (index) => {
         const newTodos = [...todos];
         newTodos[index].text = editingValue;
         setTodos(newTodos);
         setEditingIndex(null);
       };
       
       const handleCancelEdit = () => {
         setEditingIndex(null);
       };
       
      return(
          <div>
            <div className="header">
            <h1 className="name">Todo List</h1>
            <nav>
        <ul>
            <li class="link"><Link to={"/"}>Home</Link></li>
            <li class="link"><Link to={"/Features of My TODO list"}>Features</Link></li>
            <li class="link"><a href="#">About</a></li>
            <li class="link"><a href="#">Contact</a></li>
        </ul>
    </nav>
            </div>
         <div className="content">
        <input
          className="todo"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Add todo..."
        />
        <button onClick={handleAddTodo} className="insert" >Add</button>
        </div>

        
        <div className="theList">
        <div className="tasks">
          {todos.map((todo, index) => (
            <div  className="task" key={index}>
              {editingIndex === index ? (
  <div>
    <input
      type="text"
      value={editingValue}
      onChange={(e) => setEditingValue(e.target.value)}
      onKeyDown={handleKeyDown}
    />
    <button onClick={() => handleSaveEdit(index) }>Save</button>
    <button onClick={handleCancelEdit}>Cancel</button>
  </div>
) : (
  <></>
)}
<div className="task-name">
                  <input className="check"
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleCompleted(index)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              
            </span>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
    </span>
    </div>
              <div className="buttons">
                  <button onClick={() => handleEdit(index)} className="update">Edit</button>
                  <button onClick={() => handleDeleteTodo(index)} className="delete">Delete</button>
              </div>
            
            </div>
          ))}
        </div>
        </div>
          
          </div>
      )
}

export default Home ;