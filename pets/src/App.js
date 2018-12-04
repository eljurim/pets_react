import React, { Component } from 'react';
// import logo from './logo.svg';
import FormPet from './components/formPet/formPet';
import ListPets from './components/listPets/listPets'
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faDog } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel, faDog)

class App extends Component {
constructor(props){
  super(props)
  this.state = {
    dogs:[]
  }
}


componentDidMount(){

  fetch('https://react-test-22eeb.firebaseio.com/pets.json').then((res)=>{
        return res.json()
      }).then((json)=>{
          console.log(Object.values(json))
          this.setState({
            dogs: Object.values(json)
          })
      }) //cierre del fetch
  
}


  render() {
    return (
      <div>  
      <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col"># ingreso</th>
                        <th scope="col">Nombre Mascota</th>
                        <th scope="col">Raza</th>
                        <th scope="col">Dueño</th>
                        <th scope="col">Fecha de Ingreso</th>
                    </tr>
                </thead>

      <ListPets dogs={this.state.dogs} />
      </table>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <FormPet></FormPet>
      <FontAwesomeIcon icon="dog"></FontAwesomeIcon>
      </div>
      
      
      ) //return de react





      





    
  }
}

export default App;
