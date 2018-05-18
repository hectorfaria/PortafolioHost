import React, { Component } from 'react';
import star from '../imgs/SVG/star.svg';

class NodeTab extends Component {
	render() {
		return (
			<div className="newtab">
				<h1 className="rainbow newtab__title">Node.js</h1>
				<div newtab__stars>
					<img src={star} alt="stars" />
					<img src={star} alt="stars" />
					<img src={star} alt="stars" />
				</div>
				<div className="newtab__container">
					<ul>
						<li>In-depth Knowledge of Javascript and Jest</li>
						<li>Constantly use ES6 tools for more clean code</li>
						<li>Have a fair knowledge with Express</li>
						<li>Understand RESTful APIs and their usage</li>
						<li>Ability of using basic NPM</li>
						<li>Ability of using Passport JS and Oauth</li>
						<li>Basic understanding of Axios and Lodash</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default NodeTab;
