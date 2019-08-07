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
        };
        this.props.onHandlePathChange();
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
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
        const datos = this.filtrosBusqueda(this.props.datos.slice());
        return (
            <div>
                <FiltrosSmall onHandleSwitchChange={this.props.onHandleSwitchChange}></FiltrosSmall>
                <Buscar OnHandleFilterTextChange={this.handleFilterTextChange}/>
                {
                    datos.map(fila => {
                        return <DescripcionRuta fila={fila} key={fila.id.toString()} />
                    })
                }
                <Link className='btn btn-warning btn-lg rounded-circle p-3 botonFlotante' to="/home/addrow">
                    <Emoji symbol="➕" label="Agregar Dato" size="md"/>
                </Link>                
            </div>
        )
    }
}

export default Home;