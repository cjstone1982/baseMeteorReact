import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { Router, Route, Link , IndexRoute, browserHistory} from 'react-router'
import { Accounts, STATES } from 'meteor/std:accounts-ui';

         import App from '../imports/ui/App.jsx'
    import Articles from '../imports/ui/Articles.jsx'
 import ArticlePage from '../imports/ui/ArticlePage.jsx'
   import Activitys from '../imports/ui/Activitys.jsx'
import ActivityPage from '../imports/ui/ActivityPage.jsx'
 import Collections from '../imports/ui/Collections.jsx'
	 import Friends from '../imports/ui/Friends.jsx'
        import Home from '../imports/ui/Home.jsx'
      import Banner from '../imports/ui/Banner.jsx'

Meteor.startup(() => {
	render((
		<Router history={browserHistory}>
			<Route path="/" component={App}>

				<IndexRoute component={Home} />

				<Route path="/signin" component={ Accounts.ui.LoginForm } formState={ STATES.SIGN_IN } />
        		<Route path="/signup" component={ Accounts.ui.LoginForm } formState={ STATES.SIGN_UP } />

				<Route path="/articles" component={Articles}>
					<Route path="/article_category/:name" component={Articles} />
				</Route>
				<Route path="/article/:id" component={ArticlePage} />

				<Route path="/activitys" component={Activitys}>
					<Route path="/activity_category/:name" component={Activitys} />
				</Route>
				<Route path="/activity/:id" component={ActivityPage} />

				<Route path="/collections" component={Collections}>
					<Route path="/collection/:id" component={Articles} />
				</Route>

				<Route path="/friends" component={Friends}>
					<Route path="/friend/:id" component={Friends} />
				</Route>

			</Route>

			{/*
			<Route path="/admin" component={ App }>
				<IndexRoute component={ Admin } />
			</Route>

			<Route path="*" component={ NotFound } />
			*/}
		</Router>
	), document.getElementById('render-target'))
});


