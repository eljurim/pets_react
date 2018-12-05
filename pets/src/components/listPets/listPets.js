import React, { Component } from 'react';
import deleteEntry from './fetchDelete'

import './listPets.css';



class ListPets extends Component {

    deleteEntry(e) {

        console.log("Borrando la entrada " + e.target.parentElement.parentElement.id)
        deleteEntry(e.target.parentElement.parentElement.id)
    }
    
    render() {
        
    return(
        <div>
        <h1>Mascotas Registradas</h1>
        <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col"># ingreso</th>
                        <th scope="col">Nombre Mascota</th>
                        <th scope="col">Raza</th>
                        <th scope="col">Dueño</th>
                        <th scope="col">Fecha de Ingreso</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
        <tbody>
        {this.props.dogs.map((dog,index) => (
            
                <tr id={dog[0]}>
                    <th scope="row">{index+1}</th>
                    <td>{dog[1].name}</td>
                    <td>{dog[1].breed}</td>
                    <td>{dog[1].owner}</td>
                    <td>{dog[1].checkIn}</td>
                    <td><button  className="delButton" onClick={this.deleteEntry}>X</button></td>
                </tr>
                )
        )}
        </tbody>
        </table>
                        <div id="exampleModalLong" class="modal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
        </div>
      )


  }
}

export default ListPets;
