import React, { Component } from 'react';
import star from '../imgs/SVG/star.svg';

class GraphTab extends Component {
	render() {
		return (
			<div className="newtab">
				<h1 className="rainbow newtab__title">GraphQL</h1>
				<div newtab__stars>
					<img src={star} alt="stars" />
					<img src={star} alt="stars" />
				</div>
				<div className="newtab__container">
					<ul>
						<li>Understand GraphQL and its purpose</li>
						<li>Can make a small JSON server for it's usage</li>
						<li>Able to use Apollo Client</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default GraphTab;
