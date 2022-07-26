import React, { Component } from 'react';
import Buttons from './Buttons';
import Input from './Input';
import Textarea from './Textarea';

  class Form extends Component {
    constructor(props) { 
      super(props)
      
      this.state = {
        name: '',
        lastName: '',
        birthday: '',
        phone: '',
        site: '',
        personalInfo: '',
        technologyStack: '',
        lastProjectDescr: ''
      }
      
      this.formFieldsHandler = this.formFieldsHandler.bind(this)
    }
        
    formFieldsHandler = (event) => {
      this.setState({[event.target.name]: event.target.value}) 
      // console.log(`${[event.target.name]} - ${event.target.value}`);
    }

    // formValidation = () => {

    // }

    onSubmit = (event) => {
      event.preventDefault();
      // const isValid = this.formValidation()
      console.log(this.state);
    }

    onReset = () => {
      this.setState({
        name: '',
        lastName: '',
        birthday: '',
        phone: '',
        site: '',
        personalInfo: '',
        technologyStack: '',
        lastProjectDescr: ''
      })
    }

    render() {

      const {name, lastName, birthday, phone, site, personalInfo, technologyStack, lastProjectDescr} = this.state;


      return (
        <form className='form' onSubmit={ this.onSubmit } >
          <Input 
              title='Имя' 
              name='name'
              value={name} 
              changeInputValue={ this.formFieldsHandler } />
          <Input 
              title='Фамилия' 
              name='lastName'
              value={lastName} 
              changeInputValue={ this.formFieldsHandler } />
          <Input 
              title='Дата рождения' 
              name='birthday'
              value={birthday} 
              type='date' 
              changeInputValue={ this.formFieldsHandler } />
          <Input 
              title='Номер телефона' 
              name='phone'
              value={phone} 
              changeInputValue={ this.formFieldsHandler } />
          <Input 
              title='Адрес сайта' 
              name='site'
              value={site}
              changeInputValue={ this.formFieldsHandler } />
          <Textarea 
              title='О себе' 
              name='personalInfo'
              value={personalInfo}
              changeInputValue={ this.formFieldsHandler } />
          <Textarea 
              title='Стек технологий' 
              name='technologyStack'
              value={technologyStack} 
              changeInputValue={ this.formFieldsHandler } />
          <Textarea 
              title='Описание последнего проекта' 
              name='lastProjectDescr'
              value={lastProjectDescr} 
              changeInputValue={ this.formFieldsHandler } />
          <Buttons 
              resetResult={ this.onReset }/>
        </form>
      )
    }
  }

  export default Form;