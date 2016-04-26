import React, { Component } from 'react'
import { Link } from 'react-router'

import Article from './Article.jsx'

export default class Articles extends Component{

	getArticles() {
		return [
			{ _id: 1, title: 'This is title 1', author:'花落颜颜', createAt:new Date() },
			{ _id: 2, title: 'This is title 2', author:'超人先生', createAt:new Date()},
			{ _id: 3, title: 'This is title 3', author:'剽悍一只猫', createAt:new Date()},
			{ _id: 4, title: 'This is title 4', author:'花落颜颜', createAt:new Date() },
			{ _id: 5, title: 'This is title 5', author:'超人先生', createAt:new Date()},
			{ _id: 6, title: 'This is title 6', author:'剽悍一只猫', createAt:new Date()},
			{ _id: 7, title: 'This is title 7', author:'花落颜颜', createAt:new Date() },
			{ _id: 8, title: 'This is title 8', author:'超人先生', createAt:new Date()},
			{ _id: 9, title: 'This is title 9', author:'剽悍一只猫', createAt:new Date()},
		];
	}

	renderArticles() {
		return this.getArticles().map((article) => (
			<Article key={article._id} article={article} />
		));
	}

	render() {
	    return (
	    	<div className="wrap">
	    		<div className="category">
	    			<ul>	
	    				<li><Link activeClassName="category-active" to="/article_category/hot">热门</Link></li>
	    				<li><Link activeClassName="category-active" to="/article_category/new">新上榜</Link></li>
	    				<li><Link activeClassName="category-active" to="/article_category/7day">七日热门</Link></li>
	    				<li><Link activeClassName="category-active" to="/article_category/30day">三十日热门</Link></li>
	    				<li><Link activeClassName="category-active" to="/article_category/award">有奖活动</Link></li>
	    			</ul>
	    		</div>
	    		<div className="list">
	    			<ul>
	    				{this.renderArticles()}
		    		</ul>
	    		</div>
	    	</div>
	    );
	}
}
