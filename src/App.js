import React from 'react';
import './App.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Buscar from './components/Buscar';
import FiltrosSmall from './components/FiltrosSmall';
import DescripcionRuta from './components/DescripcionRuta';

function App() {
	return (
		<div className="container-fluid">
			<div className="row border m-2 my-4 p-4 fondoMockup">
				<Sidebar></Sidebar>
				<div className="col-md-10">
					<Header></Header>
					<FiltrosSmall></FiltrosSmall>
					<main className="my-2">
						<Buscar></Buscar>
						<DescripcionRuta></DescripcionRuta>
						<DescripcionRuta></DescripcionRuta>
						<DescripcionRuta></DescripcionRuta>
					</main>
				</div>
			</div>
		</div>
	);
}

export default App;
