import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import './App.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './containers/Home';
import Messages from './containers/Messages';
import Wishlist from './containers/Wishlist';
import Settings from './containers/Settings';
import Account from './containers/Account';

class App extends Component {
	constructor(props) {
		super(props);
		this.handlePathChange = this.handlePathChange.bind(this);
		this.handleSwitchChange = this.handleSwitchChange.bind(this);
		this.state = {
			isHome: true,
			porPrecio: false
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
	
	render() {
		return (
			<div className="container-fluid">
				<div className="row border m-2 my-4 p-4 fondoMockup">
					<Sidebar isHome={this.state.isHome} onHandleSwitchChange={this.handleSwitchChange}/>
					<div className="col-md-10">
						<Router>
							<Header onHandlePathChange={this.handlePathChange}/>
							<main className="my-2">
								<Route 
									exact path='/home' 
									render={ () => (
										<Home 
											porPrecio={this.state.porPrecio} 
											onHandleSwitchChange={this.handleSwitchChange}>
										</Home>
									)}>
								</Route>
								<Route path='/messages' component={Messages}></Route>
								<Route path='/wishlist' component={Wishlist}></Route>
								<Route path='/settings' component={Settings}></Route>
								<Route path='/account' component={Account}></Route>
							</main>
						</Router>
					</div>
				</div>
			</div>
		);
	}
}
export default App;
