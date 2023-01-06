import React from 'react';
import PropTypes from 'prop-types';
import {
	PageButtonInfoItem,
	PageButtonList, PageButtonSubTitle,
	PageButtonTitle,
	PageContent,
	PageDescription,
	PageItemWrapper, PageLink,
} from '@src/pages/MainPage/PageItem/style';
import { v4 as uuidv4 } from 'uuid';

export const PageItem = ({ page }) => {
	return (
		<PageItemWrapper>
			<PageButtonTitle>{page.title}</PageButtonTitle>
			<PageContent>
				<PageButtonSubTitle>Опис</PageButtonSubTitle>
				<PageDescription>{page.description}</PageDescription>
				<PageButtonSubTitle>Можливості</PageButtonSubTitle>
				<PageButtonList>
					{page.info.map((item) => {
						return (<PageButtonInfoItem key={uuidv4()}>{item}</PageButtonInfoItem>);
					})}
				</PageButtonList>
				<PageLink to={page.link}>Try it</PageLink>
			</PageContent>
			
		</PageItemWrapper>
	);
};

PageItem.propTypes = {
	page: PropTypes.shape({
		info: PropTypes.array,
		title: PropTypes.string,
		link: PropTypes.string,
		description: PropTypes.string,
	}),
};
