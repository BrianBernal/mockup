import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { addData, getDataById, updateData } from '../API';

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

    componentDidMount() {
        if (this.props.id) {
            const initialState = getDataById(this.props.id)
            this.setState({
                ...initialState
            });
        }
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

        const { fecha, hora, diaNoche, ciudadOrigen, ciudadDestino, precio } = this.state;

        if (!this.props.id) { // Si no hay id entonces no esta modificando, esta guardando
            addData({
                fecha,
                hora,
                diaNoche,
                ciudadOrigen,
                ciudadDestino,
                precio
            });
            await this.setState({
                showModal: true
            });
        } else {
            const id = this.props.id
            updateData({
                id,
                fecha,
                hora,
                diaNoche,
                ciudadOrigen,
                ciudadDestino,
                precio
            });
            this.props.history.push(('/home'));                        
        }
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

    selectedCity() {

    }

    render() {
        const { fecha, hora, diaNoche, ciudadOrigen, ciudadDestino, precio } = this.state;
        return (
            <form id="formData" onSubmit={this.enviarDatos} className="col-lg-6 border border-info rounded bg-light">
                <br />
                <div className="form-group">
                    <label htmlFor="fecha">Fecha</label>
                    <input value={fecha} onChange={this.onChangeValue} type="text" className="form-control" id="fecha" name="fecha" placeholder="Monday 10th" required />
                </div>

                <div className="form-group">
                    <label htmlFor="hora">Hora</label>
                    <input value={hora} onChange={this.onChangeValue} type="text" className="form-control" id="hora" name="hora" placeholder="2:28" required />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-radio">
                        <input checked={diaNoche=='AM'} onChange={this.onChangeValue} value="AM" type="radio" id="am" name="diaNoche" className="custom-control-input" required />
                        <label className="custom-control-label" htmlFor="am">AM</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input checked={diaNoche=='PM'} onChange={this.onChangeValue} value="PM" type="radio" id="pm" name="diaNoche" className="custom-control-input" required />
                        <label className="custom-control-label" htmlFor="pm">PM</label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="ciudadOrigen">Ciudad Destino</label>
                    <select value={ciudadOrigen} onChange={this.onChangeValue} className="form-control" id="ciudadOrigen" name="ciudadOrigen" required>
                        <option value="Villeta, VL, 23444">Villeta</option>
                        <option value="Medellin, MD, 48488">Medellin</option>
                        <option value="Bucaramanga, BC, 97766">Bucaramanga</option>
                        <option value="Paris, PR, 14422">Paris</option>
                        <option value="Barcelona, BC, 90120">Barcelona</option>
                        <option value="Houston, TX, 33619">Houston</option>
                        <option value="Atlanta, GA, 30123">Atlanta</option>
                        <option value="Manizales, MZ, 211444">Manizales</option>
                        <option value="London, LD, 53766">London</option>
                        <option value="Belfast, BF, 66555">Belfast</option>
                        <option value="Chiquinquirá, CHQ, 72211">Chiquinquirá</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="ciudadDestino">Ciudad Destino</label>
                    <select value={ciudadDestino} onChange={this.onChangeValue} className="form-control" id="ciudadDestino" name="ciudadDestino" required>
                        <option value="Villeta, VL, 23444">Villeta</option>
                        <option value="Medellin, MD, 48488">Medellin</option>
                        <option value="Bucaramanga, BC, 97766">Bucaramanga</option>
                        <option value="Paris, PR, 14422">Paris</option>
                        <option value="Barcelona, BC, 90120">Barcelona</option>
                        <option value="Houston, TX, 33619">Houston</option>
                        <option value="Atlanta, GA, 30123">Atlanta</option>
                        <option value="Manizales, MZ, 211444">Manizales</option>
                        <option value="London, LD, 53766">London</option>
                        <option value="Belfast, BF, 66555">Belfast</option>
                        <option value="Chiquinquirá, CHQ, 72211">Chiquinquirá</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="precio">Precio</label>
                    <input value={precio} onChange={this.onChangeValue} type="number" className="form-control" id="precio" name="precio" placeholder="250.00" required />
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