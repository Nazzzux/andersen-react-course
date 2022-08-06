import { CREATE_TODO, DONE_TODO, LOGIN_NAME } from "./types";

export function loginName(name) {
  return {
    type: LOGIN_NAME,
    payload: name
  }
}

export function createTodo(todo) {
  return {
    type: CREATE_TODO,
    payload: todo,
  }
}

export function completeTodo(todo) {
  return {
    type: DONE_TODO,
    payload: todo.id
  }
}