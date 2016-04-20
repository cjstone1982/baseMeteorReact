import React, { Component } from 'react'
import { Link } from 'react-router'
export default class Header extends Component{
	render() {
	    return (
	    	<header>
				<div className="bg"></div>
				<div className="pc">
					<div className="logo"><Link to="/">LOGO</Link></div>
					<ul className="top-nav">
						<li><Link to="articles">文章</Link></li>
						<li><Link to="activity">活动</Link></li>
						<li>话题</li>
						<li>战友</li>
					</ul>
				</div>
				<div className="mobile">
					<div className="left-btn">
						<div className="btn-nav"><a href="javascript:void(0)">=</a></div>
						<ul className="left-nav none">
							<li><a href="">文章</a></li>
							<li><a href="">话题</a></li>
							<li><a href="">话题</a></li>
							<li><a href="">战友</a></li>
							<li><a href="">注册</a></li>
							<li><a href="">登录</a></li>
						</ul>
					</div>
					<div className="title">点石成金</div>
					<div className="right-btn">
						<a className="search" href="javascript:void(0)">search</a>
					</div>
				</div>
			</header>
	    )
	}
}
