import React from 'react';
import PropTypes from 'prop-types';
import {
	CardAuthorName,
	CardAuthorPhoto, CardBottomContent, CardCategories, CardDescription,
	CardImage, CardTitle,
	CardTitleWrapper,
	CardWrapper,
} from '@src/pages/Photo/Сard/style';
import { BASE_URL } from '@constants/base';

export const Card = ({ item, order }) => {
	return (
		<CardWrapper order={order}>
			<CardTitleWrapper>
				<CardAuthorPhoto>{item.author.slice(0, 1)}</CardAuthorPhoto>
				<CardAuthorName>{item.author}</CardAuthorName>
			</CardTitleWrapper>
			<CardImage src={`${BASE_URL}/photo/download/${item.source}`} alt={item.title}/>
			<CardBottomContent>
				<CardTitle>{item.title}</CardTitle>
				<CardCategories>{item.categories.map((item) => `#${item} `)}</CardCategories>
				<CardDescription>{`${item.author}: ${item.description}`}</CardDescription>
			</CardBottomContent>
		</CardWrapper>
	);
};

Card.propTypes = {
	item: PropTypes.shape({
		author: PropTypes.string,
		source: PropTypes.string,
		title: PropTypes.string,
		description: PropTypes.string,
		categories: PropTypes.array,
	}),
	order: PropTypes.number,
};
