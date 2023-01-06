import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@hoc/Layout/style';

export const Layout = () => {
	return (
		<Container>
			<Outlet/>
		</Container>
	);
};

Layout.propTypes = {};
