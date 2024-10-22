import React from 'react'
import { Todo } from '../App'

interface Props{
    todos:Todo[],
}

const Todolist = ({todos}: Props) => {
  return (
    <div className='App-text'>
      {todos.map((el)=><div><h3>{el.todo}</h3></div>)}
    </div>
  )
}

export default Todolist
