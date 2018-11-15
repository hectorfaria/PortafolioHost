import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import './main.css';
import Container from '../components/Container';

const Layout = ({ children, data }) => (
	<div>
		<Helmet
			title={data.site.siteMetadata.title}
			meta={[ { name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' } ]}
		/>
		<div>
			<Container>{children()}</Container>
		</div>
	</div>
);

Layout.propTypes = {
	children: PropTypes.func
};

export default Layout;

export const query = graphql`
	query SiteTitleQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
