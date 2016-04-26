import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

// Task component - represents a single todo item
export default class Article extends Component {
	render() {
		return (
			<li className="article">
				<p className="list-top">
					<a className="author">{this.props.article.author}</a>
					<em>·</em>
					<span className="time">1天前</span>
				</p>
				<h4 className="title">
					<Link to="/article/110">
					{this.props.article.title}
					</Link>
				</h4>
				<p className="list-footer">
					<a href="">阅读 9902</a>
					<a href="">评论 307</a>
					<a href="">喜欢 441</a>
					<a href="">打赏 2</a>
				</p>
			</li>
		);
	}
}
 
Article.propTypes = {
	// This component gets the task to display through a React prop.
	// We can use propTypes to indicate it is required
	article: PropTypes.object.isRequired,
};