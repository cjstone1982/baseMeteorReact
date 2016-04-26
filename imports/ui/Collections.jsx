import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Collections extends Component{
	render() {
	    return (
	    	<ul>
	    		<li><Link to="article">话题</Link></li>
	    		<li><Link to="article">话题</Link></li>
	    		<li><Link to="article">话题</Link></li>
	    		<li><Link to="article">话题</Link></li>
	    		<li><Link to="article">话题</Link></li>
	    		<li><Link to="/article/1">话题</Link></li>
	    		<li><Link to="/article/2">话题</Link></li>
	    		<li>{this.props.children}</li>
	    	</ul>

	    )
	}
}
