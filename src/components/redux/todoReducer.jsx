import { CREATE_TODO, DONE_TODO } from './types'


const initialState ={
  todos: [],
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO :
      return {...state, todos: state.todos.concat([action.payload])}
    case DONE_TODO:
      return {
        ...state, 
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return state.todos.todos.isDone = action.payload.isDone
          }
        })
      }
    default:
      return state;
  }
}