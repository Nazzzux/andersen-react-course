import React from 'react'

export default function Textarea(props) {
  return (
    <label>
      {props.title} - {props.value}
      <textarea 
        placeholder={props.title}
        name={props.name}
        value={props.value}
        rows='7'
        onChange={props.changeHandler}
      ></textarea>
    </label>
  )
}
