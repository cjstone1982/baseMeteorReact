import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Friends extends Component{
	render() {
	    return (
	    	<ul>
	    		<li><Link to="article">战友</Link></li>
	    		<li><Link to="article">战友</Link></li>
	    		<li><Link to="article">战友</Link></li>
	    		<li><Link to="article">战友</Link></li>
	    		<li><Link to="article">战友</Link></li>
	    		<li><Link to="/article/1">战友</Link></li>
	    		<li><Link to="/article/2">战友</Link></li>
	    		<li>{this.props.children}</li>
	    	</ul>

	    )
	}
}
