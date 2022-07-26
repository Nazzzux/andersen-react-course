import React, {Component} from 'react';
import styles from './Buttons.css';

class Buttons extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='buttons'>
        <button type="submit" name="submit" onClick={ this.props.getResult }>Сохранить</button>
        <button type="button" name="reset">Отмена</button>
      </div>
    )
  }
}

export default Buttons;