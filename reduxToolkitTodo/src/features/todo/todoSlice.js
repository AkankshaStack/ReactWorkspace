import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todo: [{id: 1, text: 'hello world'}]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            const newTodo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todo.push(newTodo)
        },
        removeTodo : (state, action)=>{}

    }
})