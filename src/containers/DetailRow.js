import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { getDataById, deleteData } from '../API';

import Emoji from '../components/Emoji';
import DescripcionRuta from '../components/DescripcionRuta';
import FormData from '../components/FormData';

class DetailRow extends Component {
    constructor(props) {
        super(props);
        this.props.onHandlePathChange();
        this.deleteElement = this.deleteElement.bind(this);
        this.updateElement = this.updateElement.bind(this);
        this.state = {
            modificando: false
        }
    }

    deleteElement() {
        deleteData(this.props.match.params.id);
        this.props.history.push('/home');
    }

    updateElement() {
        this.setState({
            modificando: !this.state.modificando
        })
    }

    render() {
        const fila = getDataById(this.props.match.params.id);
        return (
            <div className="container">
                <h1 className="text-center">Elemento {fila.id}</h1>

                <DescripcionRuta fila={fila}></DescripcionRuta>
                <div className="row d-flex justify-content-center">
                    <button onClick={this.deleteElement} type="button" className="btn btn-danger m-4">Eliminar</button>
                    <button onClick={this.updateElement} type="button" className="btn btn-warning m-4">Modificar</button>
                </div>
                {
                    this.state.modificando ?
                    <div className="row d-flex justify-content-end">
                        <FormData id={this.props.match.params.id}></FormData>
                    </div> :
                    null
                }
                <Link className='btn btn-warning btn-lg rounded-circle p-3 botonFlotante font-italic' to="/home">
                    <Emoji symbol="↩" label="Atras" size="md"></Emoji>
                </Link>
            </div>
        )
    }
}

export default withRouter(DetailRow);