import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { createTodo } from '../redux/action';
import styles from "./Todo.css";
import TodoForm from './TodoForm/TodoForm';
import TodoItems from './TodoItems/TodoItems';



function Todo(props) {

  return (
    <div className="container">
      <TodoForm />
      <TodoItems />
    </div>
  )
}

export default Todo