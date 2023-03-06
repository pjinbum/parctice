/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import Num1 from './practice/Num1';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import Num2 from './practice/Num2';


function App() {
  return (
    <div className="App">
      <Num1 name='jin'/>
      <Num2 name='doc'/>
      <Num2 name='lala'/>
      <Num2 name='nono'/>
      <Num1 name='bac'/>
      <Num2 name='dodo'/>
    </div>
  );
}

export default App;
