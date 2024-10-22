import './App.css';
import React, { useState } from 'react'
import Inputfield from './components/Inputfield';
import Todolist from './components/Todolist';

export interface Todo {
  id:number,
  todo:string
}

const App: React.FC= () => {
  const [todo, settodo] = useState<string>("");
  const [todos, settodos] = useState<Todo[]>([]);
  return (
    <div className='App'>
      <h2 className='App-text'>Todo Typescript List</h2>
      <Inputfield todo={todo} settodo={settodo} todos={todos} settodos={settodos} />
      <Todolist todos={todos} />
    </div>
  ) 
}

export default App
