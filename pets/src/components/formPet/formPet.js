import React,{Component} from 'react';
import './formPet.css';


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
        let checkin = document.getElementsByClassName('checkin')[0].value
        let newEntryData = { name, breed, owner, checkin }
        console.log(newEntryData)
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
                            <label className='label'>Checkin: </label>
                            <input className='input checkin' type='date' placeholder='Ingresa fecha de ingreso'></input>
                        </div>
                        <div className='contenedor'><button className='boton' type='submit' onClick={this.handleForm}>Guardar</button></div>
                    </div>                
            </form>
        );
    }
}
 
export default FormPet;