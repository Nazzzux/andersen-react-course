import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import { createTodo } from '../../redux/action';
import styles from "./TodoForm.css";


function TodoForm(props) {
  const [todo, setTodo] = useState('')
  
  const formSubmitHandler = (event) => {
    event.preventDefault()
    if (!todo) {
      return
    }
    const newTodo = {
      todo,
      id: Date.now().toString()
    }
    props.createTodo(newTodo)
    setTodo('')
  }

  return (
    <>
      <h2 className='h2'>To Do List </h2>
      <form
        className='Todo__form'
        onSubmit={formSubmitHandler}
      >
        <Input 
          title='Add Todo'
          value={todo}
          name='todoTitle'
          onInputChange={ event => setTodo(event.target.value)}
        />
        <Button 
          type='submit'
          name='save'
          content='Add Item'
        />
      </form>
    </>
  )
}

const mapDispatchToProps = {
  createTodo: createTodo
}

export default connect(null, mapDispatchToProps)(TodoForm)