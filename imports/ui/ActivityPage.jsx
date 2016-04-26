import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

// Task component - represents a single todo item
export default class ActivityPage extends Component {
	render() {
		return (
			<div className="wrap">
				<div className="author-info">
					<div class="face"></div>
				</div>
				<h1>活动标题</h1>
				<div className="show-content">
					活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容活动内容
				</div>
			</div>
		);
	}
}
 
