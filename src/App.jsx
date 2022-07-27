import React, { Component } from 'react';
import styles from './App.css'
import FormWrapper from './components/FormWrapper';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Анкета</h1>
        <FormWrapper />
      </div>
    );
  }
}

export default App;