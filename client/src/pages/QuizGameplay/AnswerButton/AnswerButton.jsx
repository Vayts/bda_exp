import React from 'react';
import PropTypes from 'prop-types';
import { AnswerButtonWrapper } from '@src/pages/QuizGameplay/AnswerButton/style';

export const AnswerButton = ({ title, clickHandler, isActive }) => {
	return (
		<AnswerButtonWrapper onClick={clickHandler} isActive={isActive}>
			{title}
		</AnswerButtonWrapper>
	);
};

AnswerButton.propTypes = {
	title: PropTypes.string,
	clickHandler: PropTypes.func,
	isActive: PropTypes.bool,
};
