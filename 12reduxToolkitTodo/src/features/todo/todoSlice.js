import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState={
    todos:[{id:1,text:"Hello World" }]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{//reducers k andar aata h property and functions
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload 
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        }
    }
}) 

export const {addTodo,removeTodo}=todoSlice.actions // ye just components k andar m functionality use krr ne k liye
export default todoSlice.reducer//ye h taaki store jo hmne bnaya h inhe acces krr paaye 