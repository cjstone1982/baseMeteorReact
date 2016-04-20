import React, { Component } from 'react'
import { RouteHandler } from 'react-router'
import Task from './Task.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Articles from './Articles.jsx'


 
// App component - represents the whole app
export default class App extends Component {
  
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}