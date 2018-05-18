import React, { Component } from 'react';
import star from '../imgs/SVG/star.svg';

class ReactTab extends Component {
	render() {
		return (
			<div className="newtab">
				<h1 className="rainbow newtab__title">React</h1>
				<div newtab__stars>
					<img src={star} alt="stars" />
					<img src={star} alt="stars" />
					<img src={star} alt="stars" />
					<img src={star} alt="stars" />
					<img src={star} alt="stars" />
				</div>
				<div className="newtab__container">
					<ul>
						<li>Ability to use Create React App</li>
						<li>Constant usage of ES6 features</li>
						<li>Understand JSX and how components work</li>
						<li>Ability to create Actions Creators and Reducers for redux.</li>
						<li>Ability to use React Helmet and use it for SEO friendly links.</li>
						<li>Ability to use React Router v4</li>
						<li>Understand the techonolgy of the Dom and how it works</li>
						<li>Ability of testing react component with Jest</li>
						<li>Ability to make server side rendering with Node.JS and</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default ReactTab;
