import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Emoji from '../components/Emoji';
import FormData from '../components/FormData';

class AddRow extends Component {
    constructor(props) {
        super(props);
        this.props.onHandlePathChange();
    }
    render() {
        return (
            <div className="container d-lg-flex justify-content-lg-center">
                <h1 className="text-center col-lg-4">Agregar Data</h1>
                <FormData onAddData={this.props.onAddData} />

                <Link className='btn btn-warning btn-lg rounded-circle p-3 botonFlotante font-italic' to="/home">
                    <Emoji symbol="↩" label="Atras" size="md"></Emoji>
                </Link>

            </div>
        )
    }
}

export default AddRow;