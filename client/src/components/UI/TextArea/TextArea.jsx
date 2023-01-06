import React from 'react';
import PropTypes from 'prop-types';
import { TextAreaInput, TextAreaWrapper } from './style';

export const TextArea = ({
	onChange,
	onBlur,
	value,
	width,
	height,
	id,
	name,
	placeholder,
	error,
	validation,
	disabled,
}) => {
	return (
		<TextAreaWrapper>
			<TextAreaInput
				placeholder={placeholder}
				onChange={onChange}
				onBlur={onBlur}
				value={value || ''}
				width={width}
				height={height}
				id={id}
				name={name}
				error={error}
				validation={validation}
				maxlength="4"
				disabled={disabled}
			/>
		</TextAreaWrapper>
	);
};

TextArea.propTypes = {
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	value: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	id: PropTypes.string,
	name: PropTypes.string,
	placeholder: PropTypes.string,
	error: PropTypes.object,
	validation: PropTypes.string,
	disabled: PropTypes.bool,
};
