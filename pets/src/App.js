import React, { Component } from 'react';
import { Route } from 'react-router-dom'
// import logo from './logo.svg';
import FormPet from './components/formPet/formPet';
import ListPets from './components/listPets/listPets'
import FullPets from './components/listPets/FullPets'
import P1 from './components/P1'
import P2 from './components/P2'
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
          this.setState({
            dogs: Object.entries(json)
          })
      }) //cierre del fetch
  
}


  render() {
    return (
      <div>  
            <Route path='/P1' exact component={P1} />  
            <Route path='/P2' exact component={P2} />  
            <Route path='/list' exact component={FullPets} />
            <Route path='/form' exact component={FormPet} />
            
      </div>
      
      
      ) //return de react





      





    
  }
}

export default App;
