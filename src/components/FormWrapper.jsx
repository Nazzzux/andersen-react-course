import React, { Component } from 'react';
import Form from './Form';
import FormData from './FormData';

  class FormWrapper extends Component {
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
        lastProjectDescr: '',
        nameError: '',
        lastNameError: '',
        birthdayError: '',
        phoneError: '',
        siteError: '',
        personalInfoError: '',
        technologyStackError: '',
        lastProjectDescrError: '',
        submit: false
      }
    }
    
    formValidation = () => {
      
      let nameErrorText = '';
      let lastNameErrorText = '';
      let birthdayErrorText = '';
      let phoneErrorText = '';
      let siteErrorText = '';
      let personalInfoErrorText = '';
      let technologyStackErrorText = '';
      let lastProjectDescrErrorText = '';

      if (this.state.name === '') {
        nameErrorText = 'Поле пустое. Заполните пожалуйста.';
      } else if(this.state.name[0] !== this.state.name[0].toUpperCase()) {
        nameErrorText ='Данное поле должно начинаться с большой буквы!';
      }
  
      if (this.state.lastName === '') {
        lastNameErrorText = 'Поле пустое. Заполните пожалуйста.';
      } else if(this.state.lastName[0] !== this.state.lastName[0].toUpperCase()) {
        lastNameErrorText = 'Данное поле должно начинаться с большой буквы!';
      }

      if(this.state.birthday === '') {
        birthdayErrorText = 'Поле пустое. Заполните пожалуйста.';
      }

      // const phoneReg = /^[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
      if (this.state.phone === '') {
        phoneErrorText = 'Поле пустое. Заполните пожалуйста.';
      } 
      // else if(this.state.phone.length > 12) {
      //   phoneErrorText = 'Номер телефона не должен быть длиннее 12 символов'
      // } else if (phoneReg.test(this.state.phone) === false) {
      //   phoneErrorText = 'Телефон должен быть формата 7-7777-77-77';
      // }

      const siteReg = /^https:\/\//;
      if (this.state.site === '') {
        siteErrorText = 'Поле пустое. Заполните пожалуйста.';
      } else if (siteReg.test(this.state.site) === false) {
        siteErrorText = 'Сайт должен начинаться с https://';
      }

      if(this.state.personalInfo === '') {
        personalInfoErrorText = 'Поле пустое. Заполните пожалуйста.';
      } else if (600 - this.state.personalInfo.length < 0) {
        personalInfoErrorText = 'Превышен лимит символов в поле';
      }
  
      if(this.state.technologyStack === '') {
        technologyStackErrorText = 'Поле пустое. Заполните пожалуйста.';
      } else if (600 - this.state.technologyStack.length < 0) {
        technologyStackErrorText = 'Превышен лимит символов в поле';
      }
  
      if(this.state.lastProjectDescr === '') {
        lastProjectDescrErrorText = 'Поле пустое. Заполните пожалуйста.';
      } else if (600 - this.state.lastProjectDescr.length < 0) {
        lastProjectDescrErrorText = 'Превышен лимит символов в поле';
      }

      if (nameErrorText || lastNameErrorText || birthdayErrorText || phoneErrorText || siteErrorText || personalInfoErrorText || technologyStackErrorText || lastProjectDescrErrorText) {
        this.setState({
          nameError: nameErrorText,
          lastNameError: lastNameErrorText,
          birthdayError: birthdayErrorText,
          phoneError: phoneErrorText,
          siteError: siteErrorText,
          personalInfoError: personalInfoErrorText,
          technologyStackError: technologyStackErrorText,
          lastProjectDescrError: lastProjectDescrErrorText
        })
        return false;
      } else {
        this.setState({
          nameError: '',
          lastNameError: '',
          birthdayError: '',
          phoneError: '',
          siteError: '',
          personalInfoError: '',
          technologyStackError: '',
          lastProjectDescrError: ''
        })
        return true;
      }
    }

    onSubmit = (event) => {
      event.preventDefault();
      this.setState({
        name: this.state.name.trim(),
        lastName: this.state.lastName.trim(),
        birthday: this.state.birthday.trim(),
        phone: this.state.phone.trim(),
        site: this.state.site.trim(),
        personalInfo: this.state.personalInfo.trim(),
        technologyStack: this.state.technologyStack.trim(),
        lastProjectDescr: this.state.lastProjectDescr.trim()
      }, () => {
        if (this.formValidation()) {
          console.log(this.state);
          this.setState({ submit: true, })
        }
      })

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
      return(
        <>
          <FormData data={ this.state } />
          <Form reset={ this.onReset }/>
        </>
        
      ) 
    }




    // formFieldsHandler = (event) => {
    //   this.setState({[event.target.name]: event.target.value}) 
    // } // down to the form logic

    // phoneNumberMask = (event) => {
    //   const maskForPhone = event.target.value
    //     .replace(/\D/g, "")
    //     .match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/)
    //     .slice(1, 5)
    //     .filter((item) => item !== "")
    //     .join("-");
    //   this.setState({ [event.target.name]: maskForPhone });
    // } // down to the form logic

    // render() {
    //   return (
    //     <form className='form' onSubmit={ this.onSubmit } >
    //       <Input 
    //           title='Имя' 
    //           name='name'
    //           value={this.state.name} 
    //           changeInputValue={ this.formFieldsHandler } 
    //        />
    //       <div className='error'> <p>{this.state.nameError}</p></div>
    //       <Input 
    //           title='Фамилия' 
    //           name='lastName'
    //           value={this.state.lastName} 
    //           changeInputValue={ this.formFieldsHandler } 
    //        />
    //        <div className='error'> <p>{this.state.lastNameError}</p></div>
    //       <Input 
    //           title='Дата рождения' 
    //           name='birthday'
    //           value={this.state.birthday} 
    //           type='date' 
    //           changeInputValue={ this.formFieldsHandler } 
    //        />
    //        <div className='error'> <p>{this.state.birthdayError}</p></div>
    //       <Input 
    //           title='Номер телефона' 
    //           name='phone'
    //           value={this.state.phone} 
    //           // changeInputValue={ this.formFieldsHandler } 
    //           changeInputValue={ this.phoneNumberMask } 
    //        />
    //        <div className='error'> <p>{this.state.phoneError}</p></div>
    //       <Input 
    //           title='Адрес сайта' 
    //           name='site'
    //           value={this.state.site}
    //           changeInputValue={ this.formFieldsHandler } 
    //        />
    //        <div className='error'> <p>{this.state.siteError}</p></div>
    //       <Textarea 
    //           title='О себе' 
    //           name='personalInfo'
    //           value={this.state.personalInfo}
    //           changeInputValue={ this.formFieldsHandler } 
    //        />
    //        <div className='error'> <p>{this.state.personalInfoError}</p></div>
    //       <Textarea 
    //           title='Стек технологий' 
    //           name='technologyStack'
    //           value={this.state.technologyStack} 
    //           changeInputValue={ this.formFieldsHandler } 
    //        />
    //        <div className='error'> <p>{this.state.technologyStackError}</p></div>
    //       <Textarea 
    //           title='Описание последнего проекта' 
    //           name='lastProjectDescr'
    //           value={this.state.lastProjectDescr} 
    //           changeInputValue={ this.formFieldsHandler } 
    //        />
    //        <div className='error'> <p>{this.state.lastProjectDescrError}</p></div>
    //       <Buttons 
    //           resetResult={ this.onReset }/>
    //     </form>
    //   )
    // }
  }

  export default FormWrapper;