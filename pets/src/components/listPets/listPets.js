import React, { Component } from 'react';

import './listPets.css';



class ListPets extends Component {
    constructor(props){
        const { breed, checkIn, checkOut, diagnosis, name, owner, symptoms } = props.obj
        super(props)
        this.state = {
          breed:breed,
          checkIn:checkIn,
          checkOut:checkOut,
          diagnosis:diagnosis,
          name:name,
          owner:owner,
          symptoms:symptoms
        }

        // this.changeLook = this.changeLook.bind(this)
        // this.changeState = this.changeState.bind(this)
      }

      
  render() {
    return (
      <div className="ListPets">
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col"># ingreso</th>
                    <th scope="col">Nombre Mascota</th>
                    <th scope="col">Raza</th>
                    <th scope="col">Dueño</th>
                    <th scope="col">Fecha de Ingreso</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>{this.state.name}</td>
                    <td>{this.state.breed}</td>
                    <td>{this.state.owner}</td>
                    <td>{this.state.checkIn}</td>
                </tr>
            </tbody>
            </table>

      </div>
    );
  }
}

export default ListPets;
