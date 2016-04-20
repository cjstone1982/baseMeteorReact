import React, { Component } from 'react'
import { Link } from 'react-router'


export default class Articles extends Component{
	render() {
	    return (
	    	<ul>
	    		<li><Link to="article">文章</Link></li>
	    		<li><Link to="article">文章</Link></li>
	    		<li><Link to="article">文章</Link></li>
	    		<li><Link to="article">文章</Link></li>
	    		<li><Link to="article">文章</Link></li>
	    		<li><Link to="/article/1">文章222</Link></li>
	    		<li><Link to="/article/2">文章111</Link></li>
	    		<li>{this.props.children}</li>
	    	</ul>

	    )
	}
}
