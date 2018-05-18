import React from 'react';
import sgithub from './imgs/SVG/github.svg';
import sattac from './imgs/SVG/attachment.svg';

export default () => {
	return (
		<header className="header">
			<div className="title">
				<h1 className="main-title rainbow">Hector Faria</h1>
				<h6 className="sub-title">Front End Developer and UX Designer</h6>
			</div>
			<nav className="user-nav">
				<a href="https://github.com/yardiewizardie">
					<img src={sgithub} className="user-nav__git" alt="icon1" />
				</a>
				<a href="mailto:hector_faria@hotmail.com">
					<img src={sattac} className="user-nav__attac" alt="icon2" />
				</a>
			</nav>
		</header>
	);
};
