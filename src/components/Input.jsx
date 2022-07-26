import React, {Component} from 'react';

class Input extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <label>
        {this.props.title}
        <input type="text" name={this.props.name} placeholder={this.props.title} onChange={ this.props.changeInputValue } />
      </label>
    )
  }
}

export default Input;