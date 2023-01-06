import React from 'react';
import { ProgressBarItem } from '@src/pages/QuizGameplay/ProgressBar/style';
import PropTypes from 'prop-types';

export const ProgressBar = ({ current, max }) => {
	const getProgress = () => {
		return Number(((current) / max * 100).toFixed(0));
	};
	
	return (
		<ProgressBarItem percent={current >= max ? '100' : getProgress()}/>
	);
};

ProgressBar.propTypes = {
	current: PropTypes.number,
	max: PropTypes.number,
};
