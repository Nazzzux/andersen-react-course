import React, {Component} from 'react';

class Textarea extends Component {
  render() {
    return(
      <label>
        {this.props.title}
        <textarea type="text" name={this.props.name} placeholder={this.props.title} rows="7" onChange={ this.props.changeInputValue } />
      </label>
    )
  }
}

export default Textarea;