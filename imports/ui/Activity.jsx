import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

// Task component - represents a single todo item
export default class Activity extends Component {
	render() {
		return (
			<li className="activity">
				<p className="list-top">
					<a className="author">{this.props.activity.author}</a>
					<em>·</em>
					<span className="time">1天前</span>
				</p>
				<h4 className="title">
					<Link to="/activity/220">
					{this.props.activity.title}
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
 
Activity.propTypes = {
	// This component gets the task to display through a React prop.
	// We can use propTypes to indicate it is required
	activity: PropTypes.object.isRequired,
};