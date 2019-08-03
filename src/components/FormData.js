import React, { Component } from 'react';

class FormData extends Component {
    constructor(props) {
        super(props);
        this.enviarDatos = this.enviarDatos.bind(this);
        this.state = {
            fecha: '',
            hora: '',
            diaNoche: '',
            ciudadOrigen: '',
            ciudadDestino: '',
            precio: 0
        }
    }

    enviarDatos(data) {
        console.log('guardar o ediar');
    }

    render() {
        const { fecha, hora, diaNoche, ciudadOrigen, ciudadDestino, precio } = this.state;
        return (
            <form className="col-lg-6 border border-info rounded bg-light">
                <br />
                <div className="form-group">
                    <label htmlFor="fecha">Fecha</label>
                    <input value={fecha} type="text" className="form-control" id="fecha" placeholder="Monday 10th" />
                </div>

                <div className="form-group">
                    <label htmlFor="hora">Hora</label>
                    <input value={hora} type="text" className="form-control" id="hora" placeholder="2:28" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-radio">
                        <input value={diaNoche} type="radio" id="am" name="customRadio" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="am">AM</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input type="radio" id="pm" name="customRadio" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="pm">PM</label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="ciudadOrigen">Ciudad Origen</label>
                    <select className="form-control" id="ciudadOrigen">
                        <option>Cartagena</option>
                        <option>Leticia</option>
                        <option>Villavicencio</option>
                        <option>Qibdó</option>
                        <option>Chiquinquirá</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="ciudadDestino">Ciudad Destino</label>
                    <select className="form-control" id="ciudadDestino">
                        <option>Cartagena</option>
                        <option>Leticia</option>
                        <option>Villavicencio</option>
                        <option>Qibdó</option>
                        <option>Chiquinquirá</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="precio">Precio</label>
                    <input value={precio} type="number" className="form-control" id="precio" placeholder="250.00" />
                </div>

                <div className="form-group">
                    <button type="button" onClick={this.enviarDatos} className="btn btn-primary btn-lg">Guardar</button>
                </div>
            </form>
        );
    }
}

export default FormData;