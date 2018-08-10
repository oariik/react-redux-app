import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ogrenciler from './components/Ogrenciler';
import Siniflar from './components/Siniflar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Ogrenciler />
        <hr />
        <Siniflar />
      </div>
    );
  }
}

export default App;
