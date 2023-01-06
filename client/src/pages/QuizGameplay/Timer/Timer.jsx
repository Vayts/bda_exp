import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment/moment';
import { TimerItem } from './style';

export const Timer = ({ time, setTime, setTimeoutId, stage }) => {
	useEffect(() => {
		const timeOut = setTimeout(() => {
			setTime(time - 1);
		}, 1000);
		setTimeoutId(timeOut);
		
		return () => {
			clearInterval(timeOut);
		};
	}, [time, stage]);
	
	return (
		<TimerItem>{moment.utc(time * 1000).format('mm:ss')}</TimerItem>
	);
};

Timer.propTypes = {
	time: PropTypes.number,
	setTime: PropTypes.func,
	setTimeoutId: PropTypes.func,
	stage: PropTypes.number,
};
