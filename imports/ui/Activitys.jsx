import React, { Component } from 'react'
import { Link } from 'react-router'

import Activity from './Activity.jsx'

export default class Activitys extends Component{

	getActivitys() {
		return [
			{ _id: 1, title: '活动 1', author:'花落颜颜', createAt:new Date() },
			{ _id: 2, title: '活动 2', author:'超人先生', createAt:new Date()},
			{ _id: 3, title: '活动 3', author:'剽悍一只猫', createAt:new Date()},
			{ _id: 4, title: '活动 4', author:'花落颜颜', createAt:new Date() },
			{ _id: 5, title: '活动 5', author:'超人先生', createAt:new Date()},
			{ _id: 6, title: '活动 6', author:'剽悍一只猫', createAt:new Date()},
			{ _id: 7, title: '活动 7', author:'花落颜颜', createAt:new Date() },
			{ _id: 8, title: '活动 8', author:'超人先生', createAt:new Date()},
			{ _id: 9, title: '活动 9', author:'剽悍一只猫', createAt:new Date()},
		];
	}

	renderActivitys() {
		return this.getActivitys().map((activity) => (
			<Activity key={activity._id} activity={activity} />
		));
	}

	render() {
	    return (
	    	<div className="wrap">
	    		<div className="category">
	    			<ul>	
	    				<li><Link activeClassName="category-active" to="/activity_category/PS4">PS4</Link></li>
	    				<li><Link activeClassName="category-active" to="/activity_category/XBOXONE">XBOXONE</Link></li>
	    				<li><Link activeClassName="category-active" to="/activity_category/PC">PC</Link></li>
	    				<li><Link activeClassName="category-active" to="/activity_category/Steam">Steam</Link></li>
	    				<li><Link activeClassName="category-active" to="/activity_category/Uplay">Uplay</Link></li>
	    			</ul>
	    		</div>
	    		<div className="list">
	    			<ul>
	    				{this.renderActivitys()}
		    		</ul>
	    		</div>
	    	</div>
	    );
	}
}
