import React from 'react';
import info from '../images/SVG/info.svg';
import sreact from '../images/SVG/react.svg';
import snode from '../images/SVG/node.svg';
import ssass from '../images/SVG/sass.svg';
import sgraphql from '../images/SVG/graphql.svg';
import sgatsby from '../images/SVG/gatsby.svg';
import stypes from '../images/SVG/typescript.svg';
import { Link } from 'gatsby';

// This has to be seriously refactor to a simple code. WIP

export default () => {
	return (
		<nav className="sidebar">
			<ul className="side-nav">
				<Link to="/" className="side-nav__link" activeClassName="selected">
					<li className="side-nav__item side-nav__item--info">
						<img src={info} className="side-nav__icon" alt="" />

						<span>Home</span>
					</li>
				</Link>
				<Link to="/react" className="side-nav__link" activeClassName="selected">
					<li className="side-nav__item">
						<img src={sreact} className="side-nav__icon" alt="" />
						<span>React</span>
					</li>
				</Link>
				<Link to="/node" activeClassName="selected" className="side-nav__link">
					<li className="side-nav__item">
						<img src={snode} className="side-nav__icon" alt="" />
						<span>Node.js</span>
					</li>
				</Link>
				<Link to="/sass" activeClassName="selected" className="side-nav__link">
					<li className="side-nav__item">
						<img src={ssass} className="side-nav__icon" alt="" />
						<span>Sass</span>
					</li>
				</Link>
				<Link to="/graphql" activeClassName="selected" className="side-nav__link">
					<li className="side-nav__item">
						<img src={sgraphql} className="side-nav__icon" alt="" />
						<span>GraphQL</span>
					</li>
				</Link>
				<Link to="/gatsby" activeClassName="selected" className="side-nav__link">
					<li className="side-nav__item">
						<img src={sgatsby} className="side-nav__icon" alt="" />
						<span>Gatsby</span>
					</li>
				</Link>
				<Link to="/types" activeClassName="selected" className="side-nav__link">
					<li className="side-nav__item">
						<img src={stypes} className="side-nav__icon" alt="" />
						<span>TypeScript</span>
						<label className="side-nav__new">New</label>
					</li>
				</Link>
			</ul>
		</nav>
	);
};
