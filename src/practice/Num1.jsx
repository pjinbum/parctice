import logo from '../logo.svg';
import React from 'react'
import '../App.css'
import ReactDOM from 'react-dom/client';



function Num1(){
  return(
    <div>
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}


export default Num1 ;