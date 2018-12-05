import React, { Component } from 'react';
import { Route } from 'react-router-dom'
// import logo from './logo.svg';
import FormPet from '../formPet/formPet';
import ListPets from './listPets'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faDog } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel, faDog)

class FullPets extends Component {
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
            <ListPets dogs={this.state.dogs} />

              <FormPet></FormPet>
      
      </div>
      
      
      ) //return de react





      





    
  }
}

export default FullPets;
