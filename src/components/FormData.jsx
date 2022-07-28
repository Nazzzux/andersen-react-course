import React, { Component } from 'react';
import Button from './Button';

export default class FormData extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <h2>{this.props.data.name} {this.props.data.lastName}</h2>
          <ul className='data-list'>  
            <li> 
              <span className='data-list-title'>Дата рождения:</span> 
              <p>{this.props.data.birthday}</p>
            </li>
            <li> 
              <span className='data-list-title'>Номер телефона:</span> 
              <p>{this.props.data.phoneNumber}</p>
            </li>
            <li> 
              <span className='data-list-title'>Сайт: </span> 
              <p>{this.props.data.site}</p>
            </li>
            <li> 
              <span className='data-list-title'>О себе: </span> 
              <p>{this.props.data.personalInfo}</p>
            </li>
            <li> 
              <span className='data-list-title'>Стек технологий: </span> 
              <p>{this.props.data.technologyStack}</p>
            </li>
            <li> 
              <span className='data-list-title'>Описание последнего проекта:</span> 
              <p>{this.props.data.lastProjectDesc}</p>
            </li>
          </ul>
        </div>
    )
  }
}
