import React from 'react'

export default function Input(props) {
  return (
    <label>
      {props.title} - {props.value}
      <input 
        type={props.type || 'text'} 
        placeholder={props.title}
        name={props.name}
        value={props.value}
        onChange={props.changeHandler}
      />
    </label>
  )
}
