import React from 'react';
import PropTypes from 'prop-types';
import { MenuButtonIcon, MenuButtonItem, MenuButtonWrapper } from '@src/components/MenuButton/style';

export const MenuButton = ({ item }) => {
	return (
		<MenuButtonWrapper>
			<MenuButtonItem
				to={item.link}
			>
				<MenuButtonIcon className={item.img}/>
			</MenuButtonItem>
		</MenuButtonWrapper>
	);
};

MenuButton.propTypes = {
	item: PropTypes.object,
};
