import React, { Component } from 'react';
// import logo from './logo.svg';
import FormPet from './components/formPet/formPet';
import ListPets from './components/listPets/listPets'
import './App.css';
import './js/bootstrap'

class App extends Component {
  render() {
    return (
        <div>
            <FormPet></FormPet>
            <br></br>
            <ListPets></ListPets>
        </div>
        <script></script>
    );
  }
}

export default App;
