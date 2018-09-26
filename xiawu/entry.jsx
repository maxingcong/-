
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route} from 'react-router-dom'

import App from './routerapp/App.jsx'
import './routerapp/main.scss'

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
	<ErrorBoundary>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </ErrorBoundary>,
	document.querySelector('#app')
	)