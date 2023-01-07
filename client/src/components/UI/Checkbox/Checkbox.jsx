import React from 'react';
import PropTypes from 'prop-types';
import { CheckboxInput, CheckboxLabel, CheckboxWrapper } from '@src/components/UI/Checkbox/style';

export const Checkbox = ({ id, text, onChange, name }) => {
	return (
		<CheckboxWrapper>
			<CheckboxLabel htmlFor={id}>{text}</CheckboxLabel>
			<CheckboxInput id={id} onChange={onChange} name={name} type='checkbox'/>
		</CheckboxWrapper>
	);
};

Checkbox.propTypes = {
	id: PropTypes.string,
	text: PropTypes.string,
	onChange: PropTypes.func,
	name: PropTypes.string,
};
