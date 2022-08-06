import React, { useState } from 'react';
import { connect } from "react-redux";
import Button from '../../Button/Button';
import { completeTodo } from '../../redux/action';
import styles from './TodoItem.css'


function TodoItem(props) {
  const [isDone, setIsDone] = useState(props.isDone);

  const onChangeHandler = (event) => { 
    console.log(event.target);
    setIsDone(event.target.checked)
    // props.completeTodo(event)
  }

  return (
    // <li className='Todo__item'>
    //   {props.title}
    // </li>

    <li className='Todo__item'>
      <label className='Todo__item-label'>
        <input 
          className='Todo__item-input'
          type='checkbox'
          name={props.id}
          checked={isDone}
          onChange={ onChangeHandler }
        />
        <div className='false'><p>{props.title}</p> <p>{isDone.toString()}</p></div>
        <Button 
          className='Todo__item-button' 
          name='delete' 
          content='Delete' 
          // onClick={buttonClickHadler}
        />
      </label>
    </li>
  )
}

const mapDispatchToProps ={
  completeTodo
}

export default connect(null, mapDispatchToProps)(TodoItem)