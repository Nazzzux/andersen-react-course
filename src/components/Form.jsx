import React, { Component } from 'react';
import Buttons from './Buttons';
import Input from './Input';
import Textarea from './Textarea';

  class Form extends Component {
    constructor(props) {
      super(props)
    }
    
    formFieldsHandler = event => {
      this.setState({[event.target.name]: event.target.value}) 
    }

    onSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
    }
    render() {

      return (
        <form className='form'>
          <Input title='Имя' name='name' changeInputValue={ this.formFieldsHandler } />
          <Input title='Фамилия' name='last name' changeInputValue={ this.formFieldsHandler } />
          <Input title='Дата рождения' name='birthday' changeInputValue={ this.formFieldsHandler } />
          <Input title='Номер телефона' name='contact number' changeInputValue={ this.formFieldsHandler } />
          <Input title='Адрес сайта' name='site' changeInputValue={ this.formFieldsHandler } />
          <Textarea title='О себе' name='personal info' changeInputValue={ this.formFieldsHandler } />
          <Textarea title='Стек технологий' name='technology stack' changeInputValue={ this.formFieldsHandler } />
          <Textarea title='Описание последнего проекта' name='last project descr' changeInputValue={ this.formFieldsHandler } />
          <Buttons getResult={ this.onSubmit } />
        </form>
      )
    }
  }

  export default Form;