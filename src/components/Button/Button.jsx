import React from 'react';
import styles from './Button.css';

export default function Button(props) {
  
  return (
    <button 
      type={ props.type || 'button' }
      name={ props.name }
      onClick={ props.buttonClickHadler }
    >
      {props.content}
    </button>
  )
}
