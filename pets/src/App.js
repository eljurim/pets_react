import React, { Component } from 'react';
import logo from './logo.svg';
import FormPet from './components/formPet/formPet';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <FormPet></FormPet>
        </div>
    );
  }
}

export default App;
