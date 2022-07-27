import React, { Component } from 'react';
import Buttons from './Buttons';
import Input from './Input';
import Textarea from './Textarea';

export default class Form extends Component {
  constructor(props) {
    super(props);
  }

    formFieldsHandler = (event) => {
      this.setState({[event.target.name]: event.target.value}) 
    } // down to the form logic

    phoneNumberMask = (event) => {
      const maskForPhone = event.target.value
        .replace(/\D/g, "")
        .match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/)
        .slice(1, 5)
        .filter((item) => item !== "")
        .join("-");
      this.setState({ [event.target.name]: maskForPhone });
    } 

    render() {
      return (
        <form className='form' onSubmit={ this.onSubmit } >
          <Input 
              title='Имя' 
              name='name'
              value={this.state.name} 
              changeInputValue={ this.formFieldsHandler } 
           />
          <div className='error'> <p>{this.state.nameError}</p></div>
          <Input 
              title='Фамилия' 
              name='lastName'
              value={this.state.lastName} 
              changeInputValue={ this.formFieldsHandler } 
           />
           <div className='error'> <p>{this.state.lastNameError}</p></div>
          <Input 
              title='Дата рождения' 
              name='birthday'
              value={this.state.birthday} 
              type='date' 
              changeInputValue={ this.formFieldsHandler } 
           />
           <div className='error'> <p>{this.state.birthdayError}</p></div>
          <Input 
              title='Номер телефона' 
              name='phone'
              value={this.state.phone} 
              // changeInputValue={ this.formFieldsHandler } 
              changeInputValue={ this.phoneNumberMask } 
           />
           <div className='error'> <p>{this.state.phoneError}</p></div>
          <Input 
              title='Адрес сайта' 
              name='site'
              value={this.state.site}
              changeInputValue={ this.formFieldsHandler } 
           />
           <div className='error'> <p>{this.state.siteError}</p></div>
          <Textarea 
              title='О себе' 
              name='personalInfo'
              value={this.state.personalInfo}
              changeInputValue={ this.formFieldsHandler } 
           />
           <div className='error'> <p>{this.state.personalInfoError}</p></div>
          <Textarea 
              title='Стек технологий' 
              name='technologyStack'
              value={this.state.technologyStack} 
              changeInputValue={ this.formFieldsHandler } 
           />
           <div className='error'> <p>{this.state.technologyStackError}</p></div>
          <Textarea 
              title='Описание последнего проекта' 
              name='lastProjectDescr'
              value={this.state.lastProjectDescr} 
              changeInputValue={ this.formFieldsHandler } 
           />
           <div className='error'> <p>{this.state.lastProjectDescrError}</p></div>
          <Buttons 
              resetResult={ this.props.reset }/>
        </form>

    )
  }
}
