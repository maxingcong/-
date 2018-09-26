import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
/**
 * react生命周期
 * 
 */
class App extends Component {
	constructor (props) {
		super(props)
	}

	render () {
			return (
				<div>
					react生命周期
					<h1>初始化阶段</h1>
					<ul>
						<li>
							<h3>constructor</h3>
							<p></p>
						</li>
						<li>
							<h3>componentWillMount</h3>
							<p></p>
						</li>
						<li>
							<h3>render</h3>
							<p></p>
						</li>
						<li>
							<h3>componentDidMount</h3>
							<p></p>
						</li>
					</ul>
					<h1>运行时阶段</h1>
					<ul>
						<li>
							<h3>componentWillReceiveProps</h3>
							<p></p>
						</li>
						<li>
							<h3>shouldCompentUpdate</h3>
							<p></p>
						</li>
						<li>
							<h3>componentWillUpdate</h3>
							<p></p>
						</li>
						<li>
							<h3>render</h3>
							<p></p>
						</li>
						<li>
							<h3>componentDidUpdate</h3>
							<p></p>
						</li>
					</ul>
					<h1>销毁阶段</h1>
					<ul>
						<li>
							<h3>componentWillUnmount</h3>
							<p></p>
						</li>
						
					</ul>
					<h1>错误边界异常处理</h1>
					<ul>
						<li>
							<h3>componentDidCatch</h3>
							<p></p>
						</li>
						
					</ul>
				</div>
			)
		
	}
}

ReactDOM.render(<App />, document.getElementById('app'))
