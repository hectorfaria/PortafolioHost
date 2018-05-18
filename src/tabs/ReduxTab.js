import React, { Component } from 'react';
import star from '../imgs/SVG/star.svg';

class ReduxTab extends Component {
	render() {
		return (
			<div className="newtab">
				<h1 className="rainbow newtab__title">Redux</h1>
				<div newtab__stars>
					<img src={star} alt="stars" />
					<img src={star} alt="stars" />
					<img src={star} alt="stars" />
					<img src={star} alt="stars" />
				</div>
				<div className="newtab__container">
					<ul>
						<li>Ability to create Actions and Reducers within Redux</li>
						<li>Ability to wrap Redux inside React, both browser and server side</li>
						<li>Ability to make redux thunk and redux saga if necessary</li>
						<li>Understanding async/await functions</li>
						<li>Ability to handle Redux form</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default ReduxTab;
