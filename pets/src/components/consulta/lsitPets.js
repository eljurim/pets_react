import React, { Component } from 'react';
import './list';

class ListPets extends Component {
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
                    <td>Cheeka</td>
                    <td>Boxer</td>
                    <td>Manuel</td>
                    <td>2018-10-11</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Maqui</td>
                    <td>Cacri</td>
                    <td>Santiago</td>
                    <td>2018-12-12</td>
                </tr>
            </tbody>
            </table>

            <table class="table">
            <thead class="thead-light">
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
        </table>
      </div>
    );
  }
}

export default ListPets;
