import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
/**
 * 事件处理
 * onClick = {this.testBtnFn.bind(this)}
 */
class App extends Component {
	constructor (props) {
		super(props)
		this.state = {
			list: []	
		}
	}

	getData () {
		axios.get('http://www.daxunxun.com/douban')
			.then(data => {
				/**
				 * react改变初始值方法异于vue语法
				 * this.setState({
				 * })
				 */
				console.log(data)
				this.setState({
					list: data.data
				})
			})
	}

	render () {
		if(this.state.list.length <= 0 )  {
			return (<div>
					react事件处理
					<button onClick = {this.getData.bind(this)}>点击时间测试</button>
					暂无数据
				</div>)
		} else {
			return (
				<div>
					react事件处理
					<button onClick = {this.getData.bind(this)}>点击时间测试</button>
					有数据
					<ul>
						{
							this.state.list.map((item, index) => {
								return <li key={item.id}>{item.title}</li>
							})
						}
					</ul>
				</div>
			)
		}
		
	}
}

ReactDOM.render(<App />, document.getElementById('app'))
