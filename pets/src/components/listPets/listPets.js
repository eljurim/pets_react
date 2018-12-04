import React, { Component } from 'react';

import './listPets.css';

class ListPets extends Component {
    // constructor(props){
    //     const { breed, checkIn, checkOut, diagnosis, name, owner, symptoms } = props.obj
    //     super(props)
    //     this.state = {
    //       breed:breed,
    //       checkIn:checkIn,
    //       checkOut:checkOut,
    //       diagnosis:diagnosis,
    //       name:name,
    //       owner:owner,
    //       symptoms:symptoms
    //     }

    //     // this.changeLook = this.changeLook.bind(this)
    //     // this.changeState = this.changeState.bind(this)
    //   }

      
  render() {

    return(
        <tbody>
        {this.props.dogs.map((dog,index) => (
            
                <tr>
                    <th scope="row">{index+1}</th>
                    <td>{dog.name}</td>
                    <td>{dog.breed}</td>
                    <td>{dog.owner}</td>
                    <td>{dog.checkIn}</td>
                </tr>
                )
        )}
        </tbody>
      )


  }
}

export default ListPets;
