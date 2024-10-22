import React from 'react'
import { Todo } from '../App'

interface Props{
    todo:string,
    settodo:React.Dispatch<React.SetStateAction<string>>,
    todos: Todo[],
    settodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

const Inputfield = ({todo, settodo, todos, settodos}: Props) => {
    const handleadd=()=>{
        settodos([...todos, {id:Math.random(), todo}])
    }
  return (
    <> 
      <input className='App-input' type="text" placeholder='please add task here' onChange={(e)=> settodo(e.target.value)}/>
      <button onClick={()=>handleadd()} className='button'>Add task</button>
    </>
  )
}

export default Inputfield
