import React, { Component } from 'react';
// import logo from './logo.svg';
import FormPet from './components/formPet/formPet';
import ListPets from './components/listPets/listPets'
import './App.css';


// Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faDog } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel, faDog)


class App extends Component {
constructor(props){
  super(props)
  this.state = {
    perros:[]
  }
}


componentDidMount(){
  
    fetch('https://react-test-22eeb.firebaseio.com/pets.json').then((res)=>{
      return res.json()
    }).then((json)=>{
      // console.log(arrayHTML)
      this.setState({
        perros: json
      })

    })
}


  render() {
    // iterar el state
    console.log(this.state.perros)
for(let i in this.state.perros){
  console.log(i, this.state.perros[i])
}

   const dogs = this.state.perros.map((currentValue)=>{
     return(`<tr>
      <th scope="row">1</th>
      <td>${currentValue.name}</td>
      <td>${currentValue.breed}</td>
      <td>${currentValue.owner}</td>
      <td>${currentValue.checkIn}</td>
  </tr>
       <FontAwesomeIcon icon='dog' size='2x'/>
     `);
   });

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
            {dogs}
        </div>
    );
  }
}

export default App;
