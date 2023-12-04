import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState ={
    todos:[{id:1,text:'hello world'}]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducer:{
        addTodo:(state,action)=>{
            const todo ={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        }
        
    }
})

export  const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;  