import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { Router, Route, Link , IndexRoute, browserHistory} from 'react-router'
import App from '../imports/ui/App.jsx'
import Articles from '../imports/ui/Articles.jsx'
import Activity from '../imports/ui/Activity.jsx'
import Article from '../imports/ui/Article.jsx'
// Meteor.startup(() => {
//   	render(<App />, document.getElementById('render-target'))
// })

// const {Router, Route, IndexRoute, browserHistory} = ReactRouter;


Meteor.startup(() => {
	render((
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="articles" component={Articles}>
					<Route path="/article/:id" component={Article} />
				</Route>
				<Route path="activity" component={Activity} />
				{/* ... */}
			</Route>
		</Router>
	), document.getElementById('render-target'));
});


