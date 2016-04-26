import React, { Component, PropTypes } from 'react'
import { RouteHandler } from 'react-router'

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Articles from './Articles.jsx'
import Article from './Article.jsx'

import { createContainer } from 'meteor/react-meteor-data';

Accounts.config({
	sendVerificationEmail: true,
	forbidClientAccountCreation: false
})

Accounts.ui.config({
	passwordSignupFields: 'EMAIL_ONLY',
	loginPath: '/login',
	signUpPath: '/signup',
	resetPasswordPath: '/reset-password',
	profilePath: '/profile',
	onSignedInHook: () => FlowRouter.go('/general'),
	onSignedOutHook: () => FlowRouter.go('/login'),
	minimumPasswordLength: 6
})
 
// App component - represents the whole app
export default class App extends Component {
  
    render() {
        return (
            <div>
                <Header />
                <div className="blank50"></div>
	            {this.props.children}
                <Footer />
            </div>
        )
    }
    
}

