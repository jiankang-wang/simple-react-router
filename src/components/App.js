import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from '../components/Nav'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact' 
import User from '../components/User'

// 路由跳转
//  一切皆组件
// 动态路由的离散式声明

 

export default class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* <Route path="/" exact component={Home} /> */}
            <Route 
              path="/about"
              children={ props => (<div>{ props.match ? <About /> : '' }</div>) }
            />
            <Route path="/contact" render={(props) => <Contact {...props}/>} />
            {/* <Route path="/user/:user" component={User} /> */}
            {/* 离散式 */}
            <Route path="/user" component={User} />
            {/* 相当于一个脱底组件 */}
            <Route path="/" component={() => (<Home />)} />
          </Switch>
        </div>
      </Router>
    )
  }
}
