import React, {useState, useEffect} from 'react';
import Button from '../Button/Button';
import FormData from '../FormData/FormData';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import styles from './Form.css';
import ERROR_MESSAGES from '../../error_messages';


export default function Form() {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [site, setSite] = useState('');
  const [personalInfo, setPersonalInfo] = useState('');
  const [technologyStack, setTechnologyStack] = useState('');
  const [lastProjectDesc, setLastProjectDesc] = useState('');

  const [nameError, setNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [birtdayError, setBirtdayError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [siteError, setSiteError] = useState('');
  const [personalInfoError, setPersonalInfoError] = useState('');
  const [technologyStackError, setTechnologyStackError] = useState('');
  const [lastProjectDescError, setLastProjectDescError] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  function isValid() {
    let nameErrorText = '';
    let lastNameErrorText = '';
    let birthdayErrorText = '';
    let phoneNumberErrorText = '';
    let siteErrorText = '';
    let personalInfoErrorText = '';
    let technologyStackErrorText = '';
    let lastProjectDescErrorText = '';


    if (!name) {
      nameErrorText = ERROR_MESSAGES.emptyField;
    } else if (name[0] !== name[0].toUpperCase()) {
      nameErrorText = ERROR_MESSAGES.capitalLetter
    }

    if (!lastName) {
      lastNameErrorText = ERROR_MESSAGES.emptyField;
    } else if (name[0] !== name[0].toUpperCase()) {
      lastNameErrorText = ERROR_MESSAGES.capitalLetter
    }

    if(!birthday) {
      birthdayErrorText = ERROR_MESSAGES.emptyField;
    }

    if(!phoneNumber) {
      phoneNumberErrorText = ERROR_MESSAGES.emptyField;
    }

    const siteReg = /^https:\/\//;
    if (!site) {
      siteErrorText = ERROR_MESSAGES.emptyField;
    } else if (siteReg.test(site) === false) {
      siteErrorText = ERROR_MESSAGES.site;
    }

    if(!personalInfo) {
      personalInfoErrorText = ERROR_MESSAGES.emptyField;
    } else if (600 - personalInfo.length < 0) {
      personalInfoErrorText = ERROR_MESSAGES.fieldLimit
    }
    
    if(!technologyStack) {
      technologyStackErrorText = ERROR_MESSAGES.emptyField;
    } else if (600 - technologyStack.length < 0) {
      technologyStackErrorText = ERROR_MESSAGES.fieldLimit
    }
    
    if(!lastProjectDesc) {
      lastProjectDescErrorText = ERROR_MESSAGES.emptyField;
    } else if (600 - lastProjectDesc.length < 0) {
      lastProjectDescErrorText = ERROR_MESSAGES.fieldLimit
    }

    if(nameErrorText || lastNameErrorText || birthdayErrorText || phoneNumberErrorText || siteErrorText || personalInfoErrorText || technologyStackErrorText|| lastProjectDescErrorText) {
      setNameError(nameErrorText);
      setLastNameError(lastNameErrorText);
      setBirtdayError(birthdayErrorText);
      setPhoneNumberError(phoneNumberErrorText);
      setSiteError(siteErrorText);
      setPersonalInfoError(personalInfoErrorText);
      setTechnologyStackError(technologyStackErrorText);
      setLastProjectDescError(lastProjectDescErrorText)

      return false;
    } else {
      setNameError('');
      setLastNameError('');
      setBirtdayError('');
      setPhoneNumberError('');
      setSiteError('');
      setPersonalInfoError('');
      setTechnologyStackError('');
      setLastProjectDescError('');

      return true;
    }
  }

  function formSubmitHandler(event) {
    event.preventDefault()
    setName(name.trim());
    setLastName(lastName.trim());
    setBirthday(birthday.trim());
    setPhoneNumber(phoneNumber.trim());
    setSite(site.trim());
    setPersonalInfo(personalInfo.trim());
    setTechnologyStack(technologyStack.trim());
    setLastProjectDesc(lastProjectDesc.trim());
    setSubmitted(true);
  }

  useEffect(() => {
    if (submitted) {
      if (isValid()) {
        setIsFormValid(true);
    }
  }
    setSubmitted(false);
  });

  function formReset(event) {
    event.preventDefault();
    setName('');
    setLastName('');
    setBirthday('');
    setPhoneNumber('');
    setSite('');
    setPersonalInfo('');
    setTechnologyStack('');
    setLastProjectDesc('');
    
    setNameError('');
    setLastNameError('');
    setBirtdayError('');
    setPhoneNumberError('');
    setSiteError('');
    setPersonalInfoError('');
    setTechnologyStackError('');
    setLastProjectDescError('');

    setIsFormValid(false);
  }

  function phoneNumberMask(event) {
    setPhoneNumber(
        event.target.value
        .replace(/\D/g, "")
        .match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/)
        .slice(1, 5)
        .filter((item) => item !== "")
        .join("-")
      );
  } 

  if (!isFormValid) {
    return(
      <form onSubmit={formSubmitHandler}>
          <Input 
            title='Имя'
            name='name'
            value={name}
            changeHandler={(event) => setName(event.target.value)}
            error={nameError}
          />
          <Input 
            title='Фамилия'
            name='lastName'
            value={lastName}
            changeHandler={(event) => setLastName(event.target.value)}
            error={lastNameError}
          />
          <Input 
            title='Дата рождения'
            type='date'
            name='birthday'
            value={birthday}
            changeHandler={(event) => setBirthday(event.target.value)}
            error={birtdayError}
          />
          <Input 
            title='Номер телефона'
            name='phoneNumber'
            value={phoneNumber}
            changeHandler={phoneNumberMask}
            error={phoneNumberError}
          />
          <Input 
            title='Сайт'
            name='site'
            value={site}
            changeHandler={(event) => setSite(event.target.value)}
            error={siteError}
          />
          <Textarea 
            title='О себе'
            name='personalInfo'
            value={personalInfo}
            changeHandler={(event) => setPersonalInfo(event.target.value)}
            error={personalInfoError}
          />
          <Textarea 
            title='Стек технологий'
            name='technologyStack'
            value={technologyStack}
            changeHandler={(event) => setTechnologyStack(event.target.value)}
            error={technologyStackError}
          />
          <Textarea 
            title='Описание последнего проекта'
            name='lastProjectDesc'
            value={lastProjectDesc}
            changeHandler={(event) => setLastProjectDesc(event.target.value)}
            error={lastProjectDescError}
          />
          <div className="buttons">
          <Button 
            type='submit'
            name='submit'
            content='Сохранить'
          />
          <Button 
            type='reset'
            name='reset'
            content='Отмена'
            clickHandler={formReset}
          />
          </div>
      </form>
    )
  } else {
    return (
      <div>
        <FormData 
          name={name}
          lastName={lastName}
          birthday={birthday}
          phoneNumber={phoneNumber}
          site={site}
          personalInfo={personalInfo}
          technologyStack={technologyStack}
          lastProjectDesc={lastProjectDesc}
        />
        <div className="buttons">
          <Button 
            type='reset'
            name='reset'
            content='Отмена'
            clickHandler={formReset}
          />
        </div>
      </div>
    )
  }
}
