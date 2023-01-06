import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import PropTypes from 'prop-types';
import { LoaderWrapper } from './style';

export const Loader = ({ color, size }) => (
	<LoaderWrapper>
		<ClipLoader color={color || '#475895'} loading size={size || 100} />
	</LoaderWrapper>
);

Loader.propTypes = {
	color: PropTypes.string,
	size: PropTypes.number,
};
