import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class App extends Component {
	constructor (props) {
		super(props)
		this.state = {}
	}

	render () {

		return (
			<footer className="footer">
					<ul>
						<li ><NavLink to='/home' activeClassName="active">首页</NavLink></li>
						<li ><NavLink to='/kind' activeClassName="active">分类</NavLink></li>
						<li ><NavLink to='/cart' activeClassName="active">购物车</NavLink></li>
						<li ><NavLink to='/user' activeClassName="active">我的</NavLink></li>
					</ul>
		 </footer>	
			)
	}
}

export default App