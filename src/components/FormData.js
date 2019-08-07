import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ModalReact from './ModalReact';

class FormData extends Component {
    constructor(props) {
        super(props);
        this.enviarDatos = this.enviarDatos.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.leftButton = this.leftButton.bind(this);
        this.rightButton = this.rightButton.bind(this);
        this.initialState = {
            fecha: '',
            hora: '',
            diaNoche: '',
            ciudadOrigen: '',
            ciudadDestino: '',
            precio: 0,
            showModal: false
        }
        this.state = this.initialState;
    }

    onChangeValue(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    async enviarDatos(e) {
        e.preventDefault();
        await this.setState({
            precio: Number(this.state.precio),
            ciudadOrigen: e.target.ciudadOrigen.value,
            ciudadDestino: e.target.ciudadDestino.value
        });
        await this.props.onAddData(this.state);
        await this.setState({
            showModal: true
        });
    }

    async leftButton() {
        await this.setState({
            showModal: false
        });
        this.props.history.push(('/home'));
    }

    async rightButton() {
        // this.setState(this.initialState);
        await this.setState({
            showModal: false
        });
        document.getElementById("formData").reset();
    }

    render() {
        // const { fecha, hora, diaNoche, ciudadOrigen, ciudadDestino, precio } = this.state;
        return (
            <form id="formData" onSubmit={this.enviarDatos} className="col-lg-6 border border-info rounded bg-light">
                <br />
                <div className="form-group">
                    <label htmlFor="fecha">Fecha</label>
                    <input onChange={this.onChangeValue} type="text" className="form-control" id="fecha" name="fecha" placeholder="Monday 10th" required />
                </div>

                <div className="form-group">
                    <label htmlFor="hora">Hora</label>
                    <input onChange={this.onChangeValue} type="text" className="form-control" id="hora" name="hora" placeholder="2:28" required />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-radio">
                        <input onChange={this.onChangeValue} value="am" type="radio" id="am" name="diaNoche" className="custom-control-input" required />
                        <label className="custom-control-label" htmlFor="am">AM</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input onChange={this.onChangeValue} value="pm" type="radio" id="pm" name="diaNoche" className="custom-control-input" required />
                        <label className="custom-control-label" htmlFor="pm">PM</label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="ciudadOrigen">Ciudad Origen</label>
                    <select onChange={this.onChangeValue} className="form-control" id="ciudadOrigen" name="ciudadOrigen" required>
                        <option>Cartagena</option>
                        <option>Leticia</option>
                        <option>Villavicencio</option>
                        <option>Qibdó</option>
                        <option>Chiquinquirá</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="ciudadDestino">Ciudad Destino</label>
                    <select onChange={this.onChangeValue} className="form-control" id="ciudadDestino" name="ciudadDestino" required>
                        <option>Cartagena</option>
                        <option>Leticia</option>
                        <option>Villavicencio</option>
                        <option>Qibdó</option>
                        <option>Chiquinquirá</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="precio">Precio</label>
                    <input onChange={this.onChangeValue} type="number" className="form-control" id="precio" name="precio" placeholder="250.00" required />
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg">Guardar</button>
                </div>
                <ModalReact 
                    showModal={this.state.showModal} 
                    modalTitle="¡Ingreso Exitoso!"
                    modalBody="¿Desea volver al home o ingresar una nueva fila?"
                    leftText="Volver a Home" 
                    rightText="Ingresar otra fila"
                    leftButton={this.leftButton}
                    rightButton={this.rightButton}
                />
            </form>
        );
    }
}

export default withRouter(FormData);