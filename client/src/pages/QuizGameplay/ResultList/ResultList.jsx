import React from 'react';
import PropTypes from 'prop-types';
import { ResultItem, ResultListWrapper } from '@src/pages/QuizGameplay/ResultList/style';
import { v4 as uuidv4 } from 'uuid';

export const ResultList = ({ userAnswers }) => {
	return (
		<ResultListWrapper>
			{userAnswers.map((item, index) => {
				return (<ResultItem key={uuidv4()} correct={item}>{index + 1}</ResultItem>);
			})}
		</ResultListWrapper>
	);
};

ResultList.propTypes = {
	userAnswers: PropTypes.array,
};
