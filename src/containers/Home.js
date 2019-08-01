import React, { Component } from 'react';

import Buscar from '../components/Buscar';
import DescripcionRuta from '../components/DescripcionRuta';
import FiltrosSmall from '../components/FiltrosSmall';


class Home extends Component {
    render() {
        const datos = [
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

        return (
            <div>
                <FiltrosSmall></FiltrosSmall>
                <Buscar />
                {
                    datos.map(envio => (
                        <DescripcionRuta envio={envio} key={envio.id} />
                    ))
                }
            </div>
        )
    }
}

export default Home;