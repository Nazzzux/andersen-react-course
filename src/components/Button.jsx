import React, { Component } from 'react'

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        type={ this.props.type }
        name={ this.props.name }
        onClick={ this.props.clickHandler }
      >
        {this.props.content}
      </button>
    )
  }
}
