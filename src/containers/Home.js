import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Buscar from '../components/Buscar';
import DescripcionRuta from '../components/DescripcionRuta';
import FiltrosSmall from '../components/FiltrosSmall';
import Emoji from '../components/Emoji';


class Home extends Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.state = {
            filterText: ''
        }
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        })
    }

    filtrosBusqueda(datos) {
        // Barra buscar
        if (this.state.filterText !== '') {
            datos = datos.filter(element => {
                return element.ciudadOrigen.toLowerCase().includes(this.state.filterText.toLowerCase()) ||
                        element.ciudadDestino.toLowerCase().includes(this.state.filterText.toLowerCase()) ||
                        element.precio.toString().includes(this.state.filterText) ||
                        element.fecha.toLowerCase().includes(this.state.filterText.toLowerCase())
            });
        }
        // Ordernar por precio
        if (this.props.porPrecio) {
            datos.sort((a,b) => a.precio-b.precio);            
        }
        return datos;
    }
    
    render() {
        let datos = [
            {
                id: 1,
                fecha: 'Monday 10th',
                hora: '2:28',
                diaNoche: 'PM',
                ciudadOrigen: 'Houston, TX, 33619',
                ciudadDestino: 'Atlanta, GA, 30123',
                precio: 250.00
            },
            {
                id: 2,
                fecha: 'friday 10th',
                hora: '2:28',
                diaNoche: 'PM',
                ciudadOrigen: 'Villeta, VL, 23444',
                ciudadDestino: 'Manizales, MZ, 211444',
                precio: 140.00
            },
            {
                id: 3,
                fecha: 'Monday 10th',
                hora: '2:28',
                diaNoche: 'PM',
                ciudadOrigen: 'Medellin, MD, 48488',
                ciudadDestino: 'Bucaramanga, BC, 97766',
                precio: 850.00
            },
            {
                id: 4,
                fecha: 'saturday 10th',
                hora: '2:28',
                diaNoche: 'PM',
                ciudadOrigen: 'Paris, PR, 14422',
                ciudadDestino: 'Barcelona, BC, 90120',
                precio: 1000.00
            },
            {
                id: 5,
                fecha: 'thusday 10th',
                hora: '2:28',
                diaNoche: 'PM',
                ciudadOrigen: 'London, LD, 53766',
                ciudadDestino: 'Belfast, BF, 66555',
                precio: 325.00
            }
        ];
        datos = this.filtrosBusqueda(this.props.datos.slice());
        
        return (
            <div>
                <FiltrosSmall onHandleSwitchChange={this.props.onHandleSwitchChange}></FiltrosSmall>
                <Buscar OnHandleFilterTextChange={this.handleFilterTextChange}/>
                {
                    datos.map(envio => (
                        <DescripcionRuta envio={envio} key={envio.id} />
                    ))
                }
                <Link className='btn btn-warning btn-lg rounded-circle p-3 botonFlotante' to="/home/addrow">
                    <Emoji symbol="➕" label="Agregar Dato" size="md"/>
                </Link>                
            </div>
        )
    }
}

export default Home;