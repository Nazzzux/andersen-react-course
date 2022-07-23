import React, { Component } from 'react';
import Buttons from './Buttons';
import Input from './Input';
import Textarea from './Textarea';

  class Form extends Component {
    render() {
      const formFieldsHandler = event => {
        this.setState({[event.target.name]: event.target.value}) 
      }

      const onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
      }

      return (
        <form className='form'>
          <Input title='Имя' name='name' changeInputValue={ formFieldsHandler } />
          <Input title='Фамилия' name='last name' changeInputValue={ formFieldsHandler } />
          <Input title='Дата рождения' name='birthday' changeInputValue={ formFieldsHandler } />
          <Input title='Номер телефона' name='contact number' changeInputValue={ formFieldsHandler } />
          <Input title='Адрес сайта' name='site' changeInputValue={ formFieldsHandler } />
          <Textarea title='О себе' name='personal info' changeInputValue={ formFieldsHandler } />
          <Textarea title='Стек технологий' name='technology stack' changeInputValue={ formFieldsHandler } />
          <Textarea title='Описание последнего проекта' name='last project descr' changeInputValue={ formFieldsHandler } />
          <Buttons getResult={ onSubmit } />
        </form>
      )
    }
  }

  export default Form;