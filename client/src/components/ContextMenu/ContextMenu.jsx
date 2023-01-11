import React, { useRef, useState } from 'react';
import {
	ContextMenuButton,
	ContextMenuIcon,
	ContextMenuItem,
	ContextMenuList, ContextMenuText,
	ContextMenuWrapper,
} from '@src/components/ContextMenu/style';
import { useOutsideClick } from '@src/hooks/useOutsideClick';
import PropTypes from 'prop-types';

export const ContextMenu = ({ deleteClick }) => {
	const [isOpen, setOpen] = useState(false);
	const menuRef = useRef();
	
	const closeMenu = () => {
		setOpen(false);
	};
	
	useOutsideClick(menuRef, closeMenu);
	
	return (
		<ContextMenuWrapper>
			<ContextMenuButton className='icon-more' onClick={() => setOpen(true)}/>
			
			<ContextMenuList ref={menuRef} isOpen={isOpen}>
				<ContextMenuItem onClick={() => deleteClick()}>
					<ContextMenuIcon className='icon-delete'/>
					<ContextMenuText>Delete</ContextMenuText>
				</ContextMenuItem>
			</ContextMenuList>
		</ContextMenuWrapper>
	);
};

ContextMenu.propTypes = {
	deleteClick: PropTypes.func,
};
