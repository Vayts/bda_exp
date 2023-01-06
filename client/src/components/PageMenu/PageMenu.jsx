import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { PageMenuItem, PageMenuWrapper } from '@src/components/PageMenu/style';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

export const PageMenu = ({ menuList, action, selector, activeColor }) => {
	const activeState = useSelector(selector);
	const dispatch = useDispatch();
	
	const clickHandler = useCallback((value) => {
		return () => {
			dispatch(action(value));
		};
	}, []);
	
	return (
		<PageMenuWrapper>
			{menuList.map((item) => {
				return (
					<PageMenuItem
						key={uuidv4()}	
						isActive={activeState === item.value}
						onClick={clickHandler(item.value)}
						activeColor={activeColor}
					>
						{item.text}
					</PageMenuItem>
				);
			})}
		</PageMenuWrapper>
	);
};

PageMenu.propTypes = {
	menuList: PropTypes.arrayOf(PropTypes.shape({
		value: PropTypes.string,
		text: PropTypes.string,
	})),
	action: PropTypes.func,
	selector: PropTypes.func,
	activeColor: PropTypes.string,
};
