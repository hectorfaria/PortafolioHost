import React, { Component } from 'react';
import star from '../imgs/SVG/star.svg';

class MongoTab extends Component {
	render() {
		return (
			<div className="newtab">
				<h1 className="rainbow newtab__title">MongoDB</h1>
				<div newtab__stars>
					<img src={star} alt="stars" />
					<img src={star} alt="stars" />
					<img src={star} alt="stars" />
				</div>
				<div className="newtab__container">
					<ul>
						<li>Understand the basics function of MongoDB</li>
						<li>Able to use Mongoose with Express</li>
						<li>Can make Schemas, models and update them</li>
						<li>Can easily display data with Redux</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default MongoTab;
