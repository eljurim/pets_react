import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class P1 extends Component {
      
  render() {

    return ( 
    <div>
        <h1>Prueba 1</h1>
        <Link to="/p2">Click para ir a prueba 2</Link>
    </div>
)
  }
}

export default P1;
