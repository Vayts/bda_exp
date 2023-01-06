import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from '@src/components/Loader/Loader';
import { ButtonItem } from './style';

export const Button = ({ clickHandler, text, width, type, disabled, isLoading, height, fz, margin }) => {
	return (
		<ButtonItem disabled={disabled} type={type} width={width} onClick={clickHandler} height={height} fz={fz} margin={margin}>
			{isLoading ? <Loader color='#fff' size={24}/> : text }
		</ButtonItem>
	);
};

Button.propTypes = {
	clickHandler: PropTypes.func,
	text: PropTypes.string,
	width: PropTypes.string,
	type: PropTypes.string,
	disabled: PropTypes.bool,
	isLoading: PropTypes.bool,
	height: PropTypes.string,
	fz: PropTypes.string,
	margin: PropTypes.string,
};
