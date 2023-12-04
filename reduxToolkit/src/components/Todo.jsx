import React from 'react'
import {useDispatch} from '@reduxjs/toolkit'
import { addTodo } from '../features/todo/todoSlice';


function Todo() {
  const [input,setInput]= useState('');
  const dispatch = useDispatch();

  const addTodoHandler =()=>{
    dispatch(addTodo)
  }
    return (
    <div>Todo</div>
  )
}

export default Todo