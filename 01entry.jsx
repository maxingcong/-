import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 初始化数据
 * 	vue --- data: {
 * 		
 * 	}
 * 	react --- constructor(props) {
 * 		super(props) 
 * 		this.state = {
 * 			msg: 'hello world'
 * 		}
 * 	}
 * 	访问数据
 * 		{this.state.msg}
 */
class App extends React.Component {
	constructor (props) { // props代表父亲的一些属性
		super(props) // 调用了父亲的属性---super超集
		this.state = { // 初始化的数据
			msg: 'hello world'
		}
	}

	render () {

		return (
			<div>
				hello state
				<h1>
					{this.state.msg}
				</h1>
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))
