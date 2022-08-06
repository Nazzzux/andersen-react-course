import React from 'react'
import { connect } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';
import styles from "./TodoItems.css";

function TodoItems({storeTodo, state}) {

  if (!storeTodo.length) {
    return (
      <div className='TodoItem__empty'>
        The list of Todos is empty.
      </div>
    )
  } else {
    return (
      <>
        <p className='Error'>{JSON.stringify(storeTodo)}</p>
        <ul className='Todo__list'>
          {storeTodo.map(todo => <TodoItem title={todo.todo} isDone={todo.isDone} id={todo.id} key={todo.id} />)}
        </ul>
      </>
    )

  }
}

const mapStateToProps = state => {
  return {
    storeTodo: state.todos.todos,
  }
}

export default connect(mapStateToProps, null)(TodoItems)