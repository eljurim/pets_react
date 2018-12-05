import React, { Component } from 'react';
import { Route } from 'react-router-dom'
// import logo from './logo.svg';
import FormPet from './components/formPet/formPet';
import ListPets from './components/listPets/listPets'
import FullPets from './components/listPets/FullPets'
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
            <Route path='/' exact component={FullPets} />  
      </div>
      
      
      ) //return de react





      





    
  }
}

export default App;
