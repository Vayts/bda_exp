import React from 'react';
import PropTypes from 'prop-types';
import { ErrorItemText, ErrorItemWrapper } from '@src/components/NotFormikErrorMessage/style';

export const NotFormikErrorMessage = ({ shown, errorText }) => {
	return (
		<ErrorItemWrapper>
			<ErrorItemText>
				{shown ? errorText : ''}
			</ErrorItemText>
		</ErrorItemWrapper>
	);
};

NotFormikErrorMessage.propTypes = {
	shown: PropTypes.bool,
	errorText: PropTypes.string,
};
