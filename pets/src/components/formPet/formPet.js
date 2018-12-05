import React,{Component} from 'react';
import './formPet.css';
import addNewEntry  from './fetchPost.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faDog } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel, faDog)

class FormPet extends Component{
    constructor(props) {
        super(props)
        this.handleForm = this.handleForm.bind(this)
    }


    handleForm(e) {
        e.preventDefault()
        let name = document.getElementsByClassName('name')[0].value
        let breed = document.getElementsByClassName('breed')[0].value
        let owner = document.getElementsByClassName('owner')[0].value
        let checkIn = document.getElementsByClassName('checkIn')[0].value
        let symptoms = document.getElementsByClassName('symptoms')[0].value
        addNewEntry(name,breed,owner,checkIn,symptoms)
    }

    render(){
        return(
            <form>
                <div className='titulo'>Pets Form</div>
                    <div className='principal'>
                        <div className='contenedor'>
                            <label className='label'>Nombre de la Mascota: </label>
                            <input className='input name' placeholder='Ingresa el nombre'></input>
                        </div>
                        <div className='contenedor'>
                            <label className='label'>Raza: </label>
                            <input className='input breed' placeholder='Ingresa la raza'></input>
                        </div>
                        <div className='contenedor'>
                            <label className='label'>Dueño: </label>
                            <input className='input owner' placeholder='Ingresa nombre del dueño'></input>
                        </div>
                        <div className='contenedor'>
                            <label className='label'>Fecha de Ingreso: </label>
                            <input className='input checkIn' type='date' placeholder='Ingresa fecha de ingreso'></input>
                        </div>
                        <div className='contenedor'>
                            <label className='label'>Síntomas: </label>
                            <input className='input symptoms' placeholder='Ingresa los síntomas'></input>
                        </div>
                        <div className='contenedor'><button className='boton' type='submit' onClick={this.handleForm}>Guardar</button></div>
                        {<FontAwesomeIcon icon="dog" size='5x' className='dog'></FontAwesomeIcon>}
                    </div>
                
            </form>
        );
    }
}
 
export default FormPet;