import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = ({
    todos: [{id: 1, text: 'Hello world'}]
})

// slice is extended version of reducer
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
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

// addTodo() and removeTodo() are referred to as actions
export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer