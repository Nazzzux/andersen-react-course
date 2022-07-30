import React from 'react';

export default function Button(props) {
  return (
    <button
      type={props.type || 'button'}
      name={props.name}
      onClick={props.clickHandler}
    >
      {props.content}
    </button>
  )
}
