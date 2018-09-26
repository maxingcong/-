import React, {Component} from 'react'
import ReactDOM from 'react-dom'

/**
 * 条件判断
 */
class App extends Component {
	constructor (props) {
		super(props)
		this.state = {
			flag: true
		}
	}

	render () {
		if(this.state.flag) { // if语句中的条件一般都是true
			return <h1>111111111</h1>
		} else {
			return <h1>000000000</h1>
		}
	}
}

ReactDOM.render(<App />, document.getElementById('app'))
