import React, { Component } from 'react'

export default class FormData extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <h1> {this.props.data.name} {this.props.data.lastName}</h1>
      // <ul>
      // </ul>
    )
  }
}
