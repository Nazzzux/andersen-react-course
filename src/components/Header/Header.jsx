import React from 'react'
import { connect } from "react-redux";
import styles from './Header.css'

function Header(props) {
  return (
    <div className='Header'>
      <div className="container">
        <div className='Header__inner'>
          <h1>
            Welcome, {props.name || 'Newcomer'}!
          </h1>
          <span className='Header__counter'>
            {props.storeTodo.length ? `Todos Quantity: ${props.storeTodo.length}` : '' }
          </span>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    name: state.login.name,
    storeTodo: state.todos.todos,
  }
}

export default connect(mapStateToProps, null)(Header)