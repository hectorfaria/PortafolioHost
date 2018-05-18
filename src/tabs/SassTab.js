import React, { Component } from 'react';
import star from '../imgs/SVG/star.svg';

class SassTab extends Component {
	render() {
		return (
			<div className="newtab">
				<h1 className="rainbow newtab__title">Sass</h1>
				<div newtab__stars>
					<img src={star} alt="stars" />
					<img src={star} alt="stars" />
					<img src={star} alt="stars" />
					<img src={star} alt="stars" />
					<img src={star} alt="stars" />
				</div>
				<div className="newtab__container">
					<ul>
						<li>Have knowledge of mixins, variables with SASS and root CSS</li>
						<li>Know how to use Grid and Flexbox</li>
						<li>Responsive Design for mobile</li>
						<li>Can make simple animations for styling purposes</li>
						<li>Understand and Use BEM (preferable) and SMACSS methodology</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default SassTab;
