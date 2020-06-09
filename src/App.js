import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';


function App() {
  return <div className="Mybio">
    <div className="Name">Hello World From <strong className="FullName">Faseeh Iftkhar</strong></div>

  <div><h1>My short Introduction</h1>

  <div className="ShortIntro">Full Name = Faseeh iftikhar
  <br/>
  
  Age = 20 years
  <br/>
  
  Education = Undergraduate</div></div>

  <div><h1>My Favourite Hobbies</h1>
  <ol>
    <li className="OrderList">Playing Cricket</li>
    <li>Reading Books</li>
    <li>Watching Movies</li>
  </ol></div>

  <div><h1>My Favourite Countries</h1>

  <ul>
    <li>Pakistan</li>
    <li>Turkey</li>
    <li>Italy</li>
  </ul>
  
</div>

<div><h1>My Age In Calculation</h1> <strong>{10+10}</strong></div>
  


  </div>
    
}

export default App;
