import React, {Component} from 'react';
import styles from './Buttons.css';

class Buttons extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div className='buttons'>
        <button 
            type="submit" 
            name="submit">Сохранить</button>
        <button 
            type="button" 
            name="reset" 
            onClick={ this.props.resetResult }>Отмена</button>
      </div>
    )
  }
}

export default Buttons;