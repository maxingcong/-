import React, {Component} from 'react'

class App extends Component {
	constructor (props) {
		super(props)
		this.state = {}
	}

	componentWillReceiveProps (nextProps) {
		console.log(this.props) // 上一个数据
		console.log(nextProps)  // 实时数据
	}

	goPage (index) {
		this.props.gopageFn(index)
	}

	render () {

		return (
			<div className="content">
			这里是{this.props.content}区域
			<button onClick={this.goPage.bind(this, 3)}>去我的页面</button>
			</div>	
			)
	}
}

export default App