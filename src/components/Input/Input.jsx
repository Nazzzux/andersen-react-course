import React from 'react';
import styles from './Input.css'

export default function Input(props) {
  return (
    <label>
      {props.title}
      <input 
        type={props.type || 'text'} 
        placeholder={props.title}
        name={props.name}
        value={props.value}
        onChange={props.changeHandler}
      />
      <div className='error'>{props.error}</div>
    </label>
  )
}
