import React from 'react'

export default function FormData(props) {


  return (
    <div>
      <h2>{props.name || 'Заглушка'}</h2>
      <ul className='data-list'>
        <li>
          <span className='data-list-title'>О себе:</span> 
          <p>{props.personalInfo || 'Заглушка'}</p>
        </li>
      </ul>
    </div>
  )
}
