import React, {Component} from 'react'
import ReactDOM from 'react-dom'

/**
 * 事件处理
 * onClick = {this.testBtnFn.bind(this)}
 */
class App extends Component {
	constructor (props) {
		super(props)
		this.state = {
			flag: true
		}
	}

	testBtnFn () {
		alert('1111')
	}

	render () {
		return (
			<div>
				react事件处理
				<button onClick = {this.testBtnFn.bind(this)}>点击时间测试</button>
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))
