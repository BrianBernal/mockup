import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import './App.css';
import { getData } from './API';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './containers/Home';
import Messages from './containers/Messages';
import Wishlist from './containers/Wishlist';
import Settings from './containers/Settings';
import Account from './containers/Account';
import NotFound404 from './containers/NotFound404';
import AddRow from './containers/AddRow';
import DetailRow from './containers/DetailRow';


class App extends Component {
	constructor(props) {
		super(props);
		this.handlePathChange = this.handlePathChange.bind(this);
		this.handleSwitchChange = this.handleSwitchChange.bind(this);
		this.state = {
			isHome: true,
			porPrecio: false,
			data: getData()
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
												datos={this.state.data}
												onHandleSwitchChange={this.handleSwitchChange}
												onHandlePathChange={this.handlePathChange}
											/>
										)}>
									</Route>
									<Route exact path='/home/addrow'
										render={() => (
											<AddRow onHandlePathChange={this.handlePathChange} />
										)}>
									</Route>
									<Route exact path='/home/:id'
									render={() => (
										<DetailRow onHandlePathChange={this.handlePathChange}></DetailRow>
									)}>
									</Route>
									<Route path='/messages' component={Messages}></Route>
									<Route path='/wishlist' component={Wishlist}></Route>
									<Route path='/settings' component={Settings}></Route>
									<Route path='/account' component={Account}></Route>

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
