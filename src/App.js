import './App.css';
import AddPost from './Components/AddPost';
import TodoList from './Components/Todolist';
import logo from './TodoList.png'
import React from 'react';
// import {useState} from 'react';
import Context from './Components/Context';


function App(props) {


  const [todos, setTodos] = React.useState([])

const tog = (id) =>{
  setTodos(todos.map(todo => {
    if(todo.id === id){
      todo.completed = !todo.completed
    }
    return todo;
  }))
}

const remove = (id) =>{
  setTodos(todos.filter(todo => todo.id !== id))
}

function addPost(title){
    setTodos(todos.concat([
      {
        title,
        id: Date.now(),
        completed: false
      }
    ])
  )   
}


  return (
  <Context.Provider value={{remove}}>
    <div className='wrapper'>
      <h1><img src={logo}/></h1>
      <div className='Add'><AddPost  onCreate={addPost}/></div>
      <div className='Post'>
        {todos.length ? 
        (<TodoList todo={todos} onTog={tog}/>)
         : 
        (<p className='p'>Not have todos!</p>)}
      </div>
    </div>
  </Context.Provider>
  )
}

export default App;
