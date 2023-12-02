// import {createSlice,nanoid} from '@reduxjs/toolkit'

// const initialState = {
//     todos:[{id:1,text:"hello world"}]
// }

// export const todoSlice= createSlice({
//    name:'todo',
//    initialState,
//    reducers:{

//     addTodo:(state,action)=>{
//         const todo ={
//             id:nanoid(),
//             text: action.payload
//         }
//         state.todos.push(todo)
//     },
//     removeTodo:(state, action )=>{
//         state.todos = state.todos.filter((todo)=> todo.id!== action.payload)
//     },

//     upadateTodo:(state,action)=>{
//     state.todos = state.todos.map((todo)=>todo.id == action.id? {...todo,todo:action.payload }: todo)
//     }

//    }
// })
// export const {addTodo,removeTodo,upadateTodo} = todoSlice.actions

// export default todoSlice.reducer

// // how to create and use store in project 

// // first create a store usign configurestore which taks an object as argument 

// // second create the intialState of the SpeechRecognitionResultList.e they are basic function

// // 3 create a slice using createSlice (dslice is nothng but a bigger reducer for functionality ), 
// // createSlice methods takes object which contain (name of slice , intialState , reducers)
// // s
// // reducres are methods  takes two arguments (state,action) state gives the aacces to current state of store,,
// // we take any parameters from the actions using(action.payload.parametername)

import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer
