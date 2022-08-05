import React from 'react';
import styles from './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import Todo from './components/Todo/Todo';
import Header from './components/Header/Header';

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/todos' element={<Todo />}/>
      </Routes>
    </>
  );
}

export default App;
