import React from 'react';

import Buscar from '../components/Buscar';
import DescripcionRuta from '../components/DescripcionRuta';
import FiltrosSmall from '../components/FiltrosSmall';

const Home = () => (
    <div>
        <FiltrosSmall></FiltrosSmall>
        <Buscar/>
        <DescripcionRuta/>
        <DescripcionRuta/>
        <DescripcionRuta/>
    </div>
);

export default Home;