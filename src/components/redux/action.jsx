import { CREATE_TODO, LOGIN_NAME } from "./types";

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