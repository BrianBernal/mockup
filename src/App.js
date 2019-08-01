import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

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
		this.handleSideBar = this.handleSideBar.bind(this);
		this.state = {sidebarVisibility: true};
	}

	componentDidMount() {
		this.handleSideBar();
	}

	handleSideBar() {
		if (window.location.pathname !== '/') {
			this.setState({
				sidebarVisibility: false
			});
		} else {
			this.setState({
				sidebarVisibility: true
			});
		}
	}
	
	render() {
		console.log(this.state.class)
		return (
			<div className="container-fluid">
				<div className="row border m-2 my-4 p-4 fondoMockup">
					<Sidebar visibility={this.state.sidebarVisibility}/>
					<div className="col-md-10"  onClick={this.handleSideBar}>
						<Router>
							<Header/>
							<main className="my-2">
								<Route exact path='/' component={Home}></Route>
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
