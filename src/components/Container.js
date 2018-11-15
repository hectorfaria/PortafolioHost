import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Container = ({ children }) => {
	return (
		<div className="container">
			<Header />
			<div className="content">
				<Sidebar />
				{children}
			</div>
		</div>
	);
};

export default Container;
