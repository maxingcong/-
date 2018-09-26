import React, {Component} from 'react'
import Header from './Header.jsx'
import Content from './Content.jsx'
// import Footer from './Footer.jsx'

class App extends Component {
	constructor (props) {
		super(props)
		this.state = {
			title: '首页',
			content: '首页内容'
		}
	}

	changePage (index) {
		console.log(index)
		switch (index) {
			case 0:
				this.setState({
					title: '首页',
					content: '首页内容'
				})
				break;
			case 1:
				this.setState({
					title: '分类',
					content: '分类内容'
				})
				break;
			case 2:
				this.setState({
					title: '购物车',
					content: '购物车内容'
				})
				break;
			case 3:
				this.setState({
					title: '我的',
					content: '我的内容'
				})
				break;
		}
	}

	render () {

		return (
			<div className = 'container'>
				<Header title={this.state.title}/>
				<Content content = {this.state.content} gopageFn = {this.changePage.bind(this)}/>
				<footer className="footer">
					<ul>
						<li onClick={this.changePage.bind(this, 0)}>首页</li>
						<li onClick={this.changePage.bind(this, 1)}>分类</li>
						<li onClick={this.changePage.bind(this, 2)}>购物车</li>
						<li onClick={this.changePage.bind(this, 3)}>我的</li>
					</ul>
				</footer>
			</div>	
			)
	}
}

export default App