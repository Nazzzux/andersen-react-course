import React, {useState, useEffect} from 'react';
import Button from '../Button/Button';
import FormData from '../FormData/FormData';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';


export default function Form() {

  const [name, setName] = useState('');
  const [personalInfo, setPersonalInfo] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  function formSubmitHandler(event) {
    event.preventDefault()
    setIsFormValid(true)
  }

  function formReset(event) {
    event.preventDefault();
    setName('');
    setPersonalInfo('')
    setIsFormValid(false)
  }



  if (!isFormValid) {
    return(
      <form onSubmit={formSubmitHandler}>
        //
        <span className='span'>{String(isFormValid)}</span>
        //
          <Input 
            title='Имя'
            name='name'
            value={name}
            changeHandler={(event) => setName(event.target.value)}
          />
          <Textarea 
            title='О себе'
            name='personalInfo'
            value={personalInfo}
            changeHandler={(event) => {
              setPersonalInfo(event.target.value)
              console.log(event.target);
              console.log(event.target.value);
            }}
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
        //
        <span className='span'>{String(isFormValid)}</span>
        //
        <FormData 
        name={name}
        personalInfo={personalInfo}
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
