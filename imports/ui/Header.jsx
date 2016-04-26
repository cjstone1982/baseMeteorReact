import React, { Component } from 'react'
import { Link , IndexLink} from 'react-router'
export default class Header extends Component{

	toggleUserNav(){
		$('.user-nav-list').toggleClass('none')
	}

	render() {
	    return (
	    	<header>
				<div className="bg"></div>
				<div className="pc">
					<div className="logo"><IndexLink to="/" activeClassName="active">LOGO</IndexLink></div>
					<ul className="top-nav">
						<li><Link activeClassName="header-active" to="/articles">文章</Link></li>
						<li><Link activeClassName="header-active" to="/activitys">活动</Link></li>
						<li><Link activeClassName="header-active" to="/collections">话题</Link></li>
						<li><Link activeClassName="header-active" to="/friends">战友</Link></li>
						<li><Link activeClassName="header-active" to="/signin">注册</Link></li>
						<li><Link activeClassName="header-active" to="/signup">登录</Link></li>
					</ul>
					<div className="post">

					</div>
					<div className="user-nav">
						<div className="face" onClick={this.toggleUserNav.bind(this)}></div>
						<div className="user-nav-list none">
							<ul>
								<li><Link to="articles">写文章</Link></li>
								<li><Link to="articles">我的主页</Link></li>
								<li><Link to="articles">我喜欢的</Link></li>
								<li><Link to="articles">我的收藏</Link></li>
								<li><Link to="articles">提醒</Link></li>
								<li><Link to="articles">简信</Link></li>
								<li><Link to="articles">设置</Link></li>
								<li><Link to="articles">钱包</Link></li>
								<li><Link to="articles">帮助</Link></li>
 								<li><Link to="articles">登出</Link></li>
							</ul>
						</div>
					</div>
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
