import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import './App.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './containers/Home';
import Messages from './containers/Messages';
import Wishlist from './containers/Wishlist';
import Settings from './containers/Settings';
import Account from './containers/Account';
import NotFound404 from './containers/NotFound404';
import AddRow from './containers/AddRow';

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


class App extends Component {
	constructor(props) {
		super(props);
		this.handlePathChange = this.handlePathChange.bind(this);
		this.handleSwitchChange = this.handleSwitchChange.bind(this);
		this.addData = this.addData.bind(this);
		this.state = {
			isHome: true,
			porPrecio: false,
			data: datos
		};
	}

	componentDidMount() {
		this.handlePathChange();
	}
	// this.props.match.params
	handlePathChange() {
		this.setState({
			isHome: window.location.pathname === '/home' ? true : false
		})
	}

	handleSwitchChange() {
		this.setState({
			porPrecio: !this.state.porPrecio
		})
	}

	addData(nuevaFila) {
		datos.push({
			id: datos.length+1, 
			...nuevaFila
		});
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="row border m-2 my-4 p-4 fondoMockup">
					<Sidebar isHome={this.state.isHome} onHandleSwitchChange={this.handleSwitchChange} />
					<div className="col-md-10">
						<Router>
							<Header onHandlePathChange={this.handlePathChange} />
							<main className="my-2">
								<Switch>
									<Route exact path='/home'
										render={() => (
											<Home
												porPrecio={this.state.porPrecio}
												onHandleSwitchChange={this.handleSwitchChange}
												datos={this.state.data}>
											</Home>
										)}>
									</Route>
									<Route path='/messages' component={Messages}></Route>
									<Route path='/wishlist' component={Wishlist}></Route>
									<Route path='/settings' component={Settings}></Route>
									<Route path='/account' component={Account}></Route>
									<Route exact path='/home/addrow'
										render={() => (
											<AddRow
												porPrecio={this.state.porPrecio}
												onAddData={this.addData}
												onHandlePathChange={this.handlePathChange}>
											</AddRow>
										)}>
									</Route>


									<Redirect exact from='/' to='/home' />
									<Route component={NotFound404}></Route>
								</Switch>
							</main>
						</Router>
					</div>
				</div>
			</div>
		);
	}
}
export default App;
