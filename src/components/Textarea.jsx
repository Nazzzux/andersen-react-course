import React, {Component} from 'react';

class Textarea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <label>
        {this.props.title}
        <textarea 
        type="text" 
        name={this.props.name} 
        value={this.props.value}
        placeholder={this.props.title} 
        rows="7" 
        onChange={ this.props.changeInputValue } />
      </label>
    )
  }
}

export default Textarea;