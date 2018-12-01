import React, { Component } from 'react';
// import logo from './logo.svg';
import FormPet from './components/formPet/formPet';
import ListPets from './components/listPets/listPets'
import './App.css';

class App extends Component {
  render() {
    const testObj = {
      "breed": "Boxer",
      "checkIn": "2018-09-21",
      "checkOut": "2018-12-12",
      "diagnosis": "TBD",
      "name": "Cheeka",
      "owner": "Manuel",
      "symptoms": "Hongos en la piel"
  }

    return (
        <div>
            <FormPet></FormPet>
            <br></br>
            <ListPets obj={testObj}></ListPets>
        </div>
    );
  }
}

export default App;
