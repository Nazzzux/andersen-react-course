import React, { Component } from 'react';
import Button from './Button';
import FormData from './FormData';
import Input from './Input';
import Textarea from './Textarea';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      lastName: '',
      birthday: '',
      phoneNumber: '',
      site: '',
      personalInfo: '',
      technologyStack: '',
      lastProjectDesc: '',
      submit: false,
      nameError: '',
      lastNameError: '',
      birthdayError: '',
      phoneNumberError: '',
      siteError: '',
      personalInfoError: '',
      technologyStackError: '',
      lastProjectDescError: '',
    }
  }

  isValid = () => {
    let nameErrorText = '';
    let lastNameErrorText = '';
    let birthdayErrorText = '';
    let phoneNumberErrorText = '';
    let siteErrorText = '';
    let personalInfoErrorText = '';
    let technologyStackErrorText = '';
    let lastProjectDescErrorText = '';

    if (this.state.name === '') {
      nameErrorText = 'Пустое поле'
    } else if (this.state.name[0] !== this.state.name[0].toUpperCase()) {
      nameErrorText = 'Большая буква'
    }

    if (this.state.lastName === '') {
      lastNameErrorText = 'Пустое поле'
    } else if (this.state.lastName[0] !== this.state.lastName[0].toUpperCase()) {
      lastNameErrorText = 'Большая буква'
    }

    if (this.state.birthday === '') {
      birthdayErrorText = 'Пустое поле'
    }

    // меньше 12 ошибка
    if (this.state.phoneNumber === '') {
      phoneNumberErrorText = 'Пустое поле'
    }

    const siteReg = /^https:\/\//;
    if (this.state.site === '') {
      siteErrorText = 'Пустое поле';
    } else if (siteReg.test(this.state.site) === false) {
      siteErrorText = 'Сайт должен начинаться с https://';
    }

    if(this.state.personalInfo === '') {
      personalInfoErrorText = 'Пустое поле';
    } else if (600 - this.state.personalInfo.length < 0) {
      personalInfoErrorText = 'Превышен лимит символов в поле';
    }

    if(this.state.technologyStack === '') {
      technologyStackErrorText = 'Пустое поле';
    } else if (600 - this.state.technologyStack.length < 0) {
      technologyStackErrorText = 'Превышен лимит символов в поле';
    }

    if(this.state.lastProjectDesc === '') {
      lastProjectDescErrorText = 'Пустое поле';
    } else if (600 - this.state.lastProjectDesc.length < 0) {
      lastProjectDescErrorText = 'Превышен лимит символов в поле';
    }

    if (nameErrorText || lastNameErrorText || birthdayErrorText || phoneNumberErrorText || siteErrorText || personalInfoErrorText || technologyStackErrorText || lastProjectDescErrorText) {
      this.setState({
        nameError: nameErrorText,
        lastNameError: lastNameErrorText,
        birthdayError: birthdayErrorText,
        phoneNumberError: phoneNumberErrorText,
        siteError: siteErrorText,
        personalInfoError: personalInfoErrorText,
        technologyStackError: technologyStackErrorText,
        lastProjectDescError: lastProjectDescErrorText,
      })
      return false;
    } else {
      this.setState({
        nameError: '',
        lastNameError: '',
        birthdayError: '',
        phoneNumberError: '',
        siteError: '',
        personalInfoError: '',
        technologyStackError: '',
        lastProjectDescError: '',
      })
      return true
    }
  }

  formResetHandler = (event) => {
    event.preventDefault();
    this.setState({
      name: '',
      lastName: '',
      birthday: '',
      phoneNumber: '',
      site: '',
      personalInfo: '',
      technologyStack: '',
      lastProjectDesc: '',
      submit: false,
      nameError: '',
      lastNameError: '',
      birthdayError: '',
      phoneNumberError: '',
      siteError: '',
      personalInfoError: '',
      technologyStackError: '',
      lastProjectDescError: ''
    })
  }

  formInputHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  formSubmitHandler = (event) => {
    event.preventDefault();
    this.setState({
      name: this.state.name.trim(),
      lastName: this.state.lastName.trim(),
      birthday: this.state.birthday.trim(),
      phoneNumber: this.state.phoneNumber.trim(),
      site: this.state.site.trim(),
      personalInfo: this.state.personalInfo.trim(),
      technologyStack: this.state.technologyStack.trim(),
      lastProjectDesc: this.state.lastProjectDesc.trim(),
    }, () => {
      if (this.isValid()) {
        this.setState({ submit: true })
        console.log(this.state);
      }
    })
  }

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
    if (!this.state.submit) {
      return (
        <form onSubmit={ this.formSubmitHandler }>
          <Input 
            title='Имя'
            name="name"
            value={this.state.name}
            error={this.state.nameError}
            change={this.formInputHandler}
          />
          <Input 
            title='Фамилия'
            name="lastName"
            value={this.state.lastName}
            error={this.state.lastNameError}
            change={this.formInputHandler}
          />
          <Input 
            title='Дата рождения'
            type='date'
            name="birthday"
            value={this.state.birthday}
            error={this.state.birthdayError}
            change={this.formInputHandler}
          />
          <Input 
            title='Номер телефона'
            name="phoneNumber"
            value={this.state.phoneNumber}
            error={this.state.phoneNumberError}
            change={this.phoneNumberMask}
          />
          <Input 
            title='Сайт'
            name="site"
            value={this.state.site}
            error={this.state.siteError}
            change={this.formInputHandler}
          />
          <Textarea 
            title='О себе'
            name='personalInfo'
            value={this.state.personalInfo}
            error={this.state.personalInfoError}
            change={this.formInputHandler}
          />
          <Textarea 
            title='Стек технологий'
            name='technologyStack'
            value={this.state.technologyStack}
            error={this.state.technologyStackError}
            change={this.formInputHandler}
          />
          <Textarea 
            title='Описание последнего проекта'
            name='lastProjectDesc'
            value={this.state.lastProjectDesc}
            error={this.state.lastProjectDescError}
            change={this.formInputHandler}
          />
          <div className='buttons'>
            <Button 
              type='submit' 
              name='submit' 
              content='Сохранить' />
            <Button 
              type='reset' 
              name='reset' 
              content='Отмена' 
              clickHandler={ this.formResetHandler } />
          </div>
        </form>
      )
    } else {
      return (
        <>
          <FormData
            data={ this.state }
          />
          <div className='buttons'>
            <Button 
              type='reset' 
              name='reset' 
              content='Отмена' 
              clickHandler={ this.formResetHandler } 
            />
          </div>
        </>
      )
    }
  }
}
