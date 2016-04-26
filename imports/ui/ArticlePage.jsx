import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

// Task component - represents a single todo item
export default class ArticlePage extends Component {
	render() {
		return (
			<div className="wrap">
				<div className="author-info">
					<div class="face"></div>
				</div>
				<h1>在20岁到29岁这个阶段你需要做些什么？</h1>
				<div className="show-content">
					你的简历、你的社交网站、你个人主页，你的名片，你与这个世界发生交互的任何其他地方，共同组合成了你的名字所代表的你。在互联网时代，一定要维护自己的网络形象，并和线下的形象统合起来。在眼球至上的年代，低调和神秘是无用的。当年在我明确了我的个人品牌后，神奇的事情开始发生，有接二连三的机会主动找上门来，并一直延续至今。﻿﻿
				</div>
			</div>
		);
	}
}
 
