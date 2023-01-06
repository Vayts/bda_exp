import React from 'react';
import { Outlet } from 'react-router-dom';
import { PageBarContainer } from '@hoc/PageBarLayout/style';
import { PageBar } from '@src/components/PageBar/PageBar';

export const PageBarLayout = () => {
	return (
		<>
			<PageBar/>
			<PageBarContainer>
				<Outlet/>
			</PageBarContainer>
		</>
		
	);
};
