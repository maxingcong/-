import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 循环
 * 	如果初始化的数据为一个数组，我们需要遍历
 * 		arr.map((item, index) => {
 * 			return (<li></li>)
 * 		})
 * 	
 */
class App extends React.Component {
	constructor (props) { 
		super(props) 
		this.state = { 
			msg: 'hello world',
			list: [1,2,3,4,5],
			carlist: [
				{
					brand: '奔驰',
					list: ['A系', 'C系']
				},
				{
					brand: '宝马',
					list: ['X系', 'A系']
				}
			] 
		}
	}

	render () {

		return (
			<div>
				hello state
				<h1>
					{this.state.msg}
				</h1>
				<h1>
					{this.state.list}
				</h1>
				<ul>
					{
						this.state.list.map((item, index) => {
							return (<li key={index}>{item}</li>)
						})
					}
				</ul>
				<ul>
					{
						this.state.carlist.map((item, index) => {
							let arr = [];
							item.list.map((itm, idx) => {
								arr.push(<span key={idx}>{itm}</span>)
							})
							return <li  key={index}>品牌：{item.brand}, 列表：{arr}</li>
						})
					}
				</ul>
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))
