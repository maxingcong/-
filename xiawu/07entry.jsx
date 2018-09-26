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
							<h3>constructor --- **********</h3>
							<p>组件的构造器，继承了父级的属性，可以在此设置初始化的值（初始化状态），还可以在此处设置一些方法</p>
						</li>
						<li>
							<h3>componentWillMount</h3>
							<p>组件即将被装载，孩子还未生下来，一般用不到</p>
						</li>
						<li>
							<h3>render --- **********</h3>
							<p>初次渲染DOM节点</p>
						</li>
						<li>
							<h3>componentDidMount --- **********</h3>
							<p>组件装载完毕，可以进行ajax请求数据，更新状态（状态改变，引起视图二次渲染），计时器、定时器、DOM操作</p>
						</li>
					</ul>
					<h1>运行时阶段</h1>
					<ul>
						<li>
							<h3>componentWillReceiveProps --- *****</h3>
							<p>在生命周期的第一次render后不会被调用，但是会在之后的每次render中被调用 = 当父组件再次传送props。该方法在props被传递给组件实例时被调用</p>
						</li>
						<li>
							<h3>shouldCompentUpdate --- *******</h3>
							<p>组件应该更新吗？默认都是更新的，要不不写，要写必须写返回值，返回为true表示更新，返回为false，表示不更新。是react提升性能的关键</p>
						</li>
						<li>
							<h3>componentWillUpdate</h3>
							<p>组件状态改变之后，视图将会更新，没什么用</p>
						</li>
						<li>
							<h3>render --- **********</h3>
							<p>更新视图</p>
						</li>
						<li>
							<h3>componentDidUpdate --- ***</h3>
							<p>视图更新完毕，DOM操作</p>
						</li>
					</ul>
					<h1>销毁阶段</h1>
					<ul>
						<li>
							<h3>componentWillUnmount --- *</h3>
							<p>组件即将被销毁，清除计时器，清除定时器...</p>
						</li>
						
					</ul>
					<h1>错误边界异常处理</h1>
					<ul>
						<li>
							<h3>componentDidCatch --- **********</h3>
							<p>当项目出现大的异常，会导致奔溃时，触发此钩子，起到保护的作用</p>
						</li>
						
					</ul>
				</div>
			)
		
	}
}

ReactDOM.render(<App />, document.getElementById('app'))
