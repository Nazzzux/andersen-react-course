import React from 'react'
import { connect } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';
import styles from "./TodoItems.css";

function TodoItems({storeTodo}) {

  if (!storeTodo.length) {
    return (
      <div className='TodoItem__empty'>
        The list of Todos is empty.
      </div>
    )
  } else {
    return (
      <ul className='Todo__list'>
        {storeTodo.map(todo => <TodoItem title={todo.todo} key={todo.id} />)}
      </ul>
    )
    
  }
}

const mapStateToProps = state => {
  return {
     storeTodo: state.todos.todos,
  }
}

export default connect(mapStateToProps, null)(TodoItems)