import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux';
import styles from './LoginForm.css';
import Input from "../Input/Input";
import Button from "../Button/Button";
import ERROR_MESSAGES from '../ERROR_MESSAGES';
import { loginName } from '../redux/action';

const LoginForm = (props) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // to navigate to next tab

  const loginSubmitHandler = (event) => {
    event.preventDefault();
    if (!name) {
      setError(ERROR_MESSAGES.emptyField)
    } else {
      props.loginName(name)
      navigate('/todos')
    }

  }

  const inputChangeHandler = (event) => {
    setName(event.target.value)
  }

  return (
    <div className="container">
      <div className='LoginForm'>
        <h2>Log In</h2>
        <form 
          onSubmit={loginSubmitHandler}
        >
          <Input 
            title='Name'
            name='name'
            value={name}
            error={error}
            onInputChange={inputChangeHandler}
          />
          <Button 
            type='submit'
            name='submit'
            content='Log In'
          />
        </form>
        </div>
    </div>
  )
}

const mapDispatchToProps = {
  loginName
}

export default connect(null, mapDispatchToProps)(LoginForm);