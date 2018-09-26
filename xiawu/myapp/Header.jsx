import React, {Component} from 'react'

class App extends Component {
	constructor (props) {
		super(props)
		this.state = {}
	}

	render () {

		return (
			<header className="header">这里是{this.props.title}头部</header>	
			)
	}
}

export default App