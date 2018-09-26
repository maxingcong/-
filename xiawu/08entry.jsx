// 组件间传值与错误编辑异常处理钩子函数
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import App from './myapp/App.jsx'
import './myapp/main.scss'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
ReactDOM.render(
	<ErrorBoundary><App /></ErrorBoundary>,
	document.querySelector('#app')
	)