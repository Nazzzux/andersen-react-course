import React from 'react';
import styles from './TodoItem.css'


export default function TodoItem(props) {
  return (
    <li className='Todo__item'>
      {props.title}
    </li>
  )
}
