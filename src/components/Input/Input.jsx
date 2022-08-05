import React from 'react'
import styles from "./Input.css";

export default function Input(props) {
  return (
    <label className='Label'>
      {props.error ? (<span className='Error'>{props.error}</span>) : props.title}
      <input 
      className='Input'
        placeholder={props.title}
        type="text"
        name={props.name} 
        value={props.value}
        onChange={props.onInputChange}
      />
    </label>
  )
}
