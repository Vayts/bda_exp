import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NoPageContent, NoPageText, NoPageTitle, NoPageWrapper } from './style';

export const NoPage = () => {
	useEffect(() => {
		document.title = 'bDa - ERROR';
	}, []);
	
	return (
		<NoPageWrapper>
			<NoPageContent>
				<NoPageTitle>Whoooops!</NoPageTitle>
				<NoPageText>404=( Page not found!</NoPageText>
				<Link to={-1}>Back</Link>
			</NoPageContent>
		</NoPageWrapper>
	);
};

NoPage.propTypes = {};
