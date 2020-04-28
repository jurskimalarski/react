import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <h2 className='App'>APP </h2>
    </div>
  );
}


function Test() {
  return (
    React.createEleme("div",null),
        React.createElement("img",{src:"https://www.espectro.pw/img/img_tomatoes.jpg",alt: "Fotka"}),
        React.createElement("h1",null,"Tekst potomny")
  );
}







export default Test;

