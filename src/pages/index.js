import React from 'react';
import one from '../assets/1.png';
import two from '../assets/2.png';


//natur css => http://nature-norge.surge.sh/

const IndexPage = () => (
	<main className="review">
		<div className="code-container">
			<span>
				Hi!, My name is Hector Faria, I'm a self-taught developer, I'm quite new in the development enviroment
				but I'm always willing to learn! , Interested in working with me?{' '}
				<a href="mailto:hector_faria@hotmail.com" className="contact rainbow">
					Contact me
				</a>
			</span>
		</div>
		<div className="detail">
			<div className="info-container">
				const{' '}
				<a href="mailto:hector_faria@hotmail.com" className="contact rainbow">
					contactme
				</a>{' '}
				<span className="white">=</span> new <span className="green">DeveloperInfo</span>{' '}
				<span className="white">&#40;&#123;</span>{' '}
				<div className="contact">
					&#8194;&#8194;&#8194;github:{' '}
					<span className="orange">
						<a className="orange" href="https://github.com/yardiewizardie">
							"yardiewizardie"
						</a>
					</span>
					<span className="white">,</span>
				</div>
				<div className="contact">
					&#8194;&#8194;&#8194;email:{' '}
					<span className="orange">
						<a className="orange" href="mailto:hector_faria@hotmail.com">
							"hector_faria@hotmail.com"
						</a>
					</span>
					<span className="white">,</span>
				</div>
				<div className="contact">
					&#8194;&#8194;&#8194;upwork:{' '}
					<span className="orange">
						<a className="orange" href="https://www.upwork.com/freelancers/~01a76b9ab7d95f09b0">
							"hectorfaria"
						</a>
					</span>
					<span className="white">,</span>
				</div>
				<span className="white">&#125;&#41;&#59;</span>
			</div>

			<div className="info-projects">
				<div className="info-projects__title">Projects</div>
				<div className="info-projects__project">
					<div className="info-projects__list">
						<ul className="name">React</ul>
						<ul className="name">MongoDB</ul>
						<ul className="name">Node.JS</ul>
						<ul className="name">Express</ul>
						<ul className="name">React</ul>
						<ul className="name">Redux</ul>
						<ul className="name">Sass</ul>
					</div>
					<img src={two} className="info-projects__img" alt="2" />
					<span className="name">Personal project of watching movies together with friends.</span>
				</div>
				<div className="info-projects__project">
					<div className="info-projects__list">
						<ul className="name">React</ul>
						<ul className="name">BEM</ul>
						<ul className="name">Redux</ul>
						<ul className="name">Sass</ul>
					</div>
					<img src={one} className="info-projects__img" alt="1" />
					<span className="name">
						Webpage travel agency about Norwegian destinations and interesting places.
					</span>
				</div>
			</div>
		</div>
	</main>
);

export default IndexPage;
