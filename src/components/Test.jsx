import React from 'react'
import Input from './Input/Input'
import styles from './Test.css'


export default function Test() {

  const clickHandler = (event) => {
    console.log('event value', event.target.value)
    console.log('event checked', event.target.checked)
  }

  return (
    <label className='Test'>
      <Input 
        type='checkbox'
      />
      {/* <span className=''></span> */}
    </label>
  )
}
