import React, {Component} from 'react'
import Header from './Header.jsx'
import Home from './Home.jsx'
import Kind from './Kind.jsx'
import Cart from './Cart.jsx'
import User from './User.jsx'
import Footer from './Footer.jsx'
import {Route, Switch, Redirect} from 'react-router-dom'

class App extends Component {
	constructor (props) {
		super(props)
		this.state = {}
	}

	render () {

		return (
			<div className = 'container'>
				<Header />
				<Switch>
					<Route path='/home' component={Home} />
					<Route path='/kind' component={Kind} />
					<Route path='/cart' component={Cart} />
					<Route path='/user' component={User} />
					<Redirect to={{pathname: '/home'}} />
				</Switch>
				<Footer />
			</div>	
			)
	}
}

export default App