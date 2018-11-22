import React from 'react';
import Layout from '../components/layout';
import Typed from 'react-typed';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

//natur css => http://nature-norge.surge.sh/

const IndexPage = () => (
	<StaticQuery
		query={graphql`
			query {
				imageOne: file(relativePath: { eq: "1.png" }) {
					childImageSharp {
						fluid(maxWidth: 1000) {
							...GatsbyImageSharpFluid
						}
					}
				}
				imageTwo: file(relativePath: { eq: "2.png" }) {
					childImageSharp {
						fluid(maxWidth: 1000) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		`}
		render={(data) => (
			<Layout>
				<main className="review">
					<div className="code-container">
						<span>
							Hi!, My name is <b>Hector Faria, </b>
							<Typed
								strings={[
									'and I am a Front-End Developer.',
									'I am in love with JavaScript.',
									'I like learning new tecnologies.',
									'I am a proud Professional.',
									'I would like to help you.',
									'I have a fascination for CSS.'
								]}
								typeSpeed={50}
								backSpeed={40}
								loop
							/>
						</span>
					</div>
					<div className="detail">
						<div className="info-container">
							<div style={{ textAlign: 'center', marginTop: '2rem' }}>
								<h2>
									<a href="mailto:hector_faria@hotmail.com" className="contact rainbow">
										Contact me
									</a>
								</h2>
							</div>
							{/* const{' '}
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
				<span className="white">&#125;&#41;&#59;</span> */}
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
								<Img fluid={data.imageTwo.childImageSharp.fluid} />
								<span className="name">Personal project of watching movies together with friends.</span>
							</div>
							<div className="info-projects__project">
								<div className="info-projects__list">
									<ul className="name">React</ul>
									<ul className="name">BEM</ul>
									<ul className="name">Redux</ul>
									<ul className="name">Sass</ul>
								</div>
								<Img fluid={data.imageOne.childImageSharp.fluid} />
								<span className="name">
									Webpage travel agency about Norwegian destinations and interesting places.
								</span>
							</div>
						</div>
					</div>
				</main>
			</Layout>
		)}
	/>
);

export default IndexPage;
