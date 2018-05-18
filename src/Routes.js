import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InfoTab from './tabs/InfoTab';
import ReactTab from './tabs/ReactTab';
import ReduxTab from './tabs/ReduxTab';
import NodeTab from './tabs/NodeTab';
import SassTab from './tabs/SassTab';
import GraphTab from './tabs/GraphTab';
import MongoTab from './tabs/MongoTab';
import BonusTab from './tabs/BonusTab';
import Sidebar from './Siderbar';
import Header from './Header';

class Routes extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="container">
					<Header />
					<div className="content">
						<Sidebar />
						<Switch>
							<Route path="/" exact component={InfoTab} />
							<Route path="/react" component={ReactTab} />
							<Route path="/redux" component={ReduxTab} />
							<Route path="/node" component={NodeTab} />
							<Route path="/sass" component={SassTab} />
							<Route path="/graphql" component={GraphTab} />
							<Route path="/mongodb" component={MongoTab} />
							<Route path="/more" component={BonusTab} />
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default Routes;
