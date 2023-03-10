import React, { useState } from 'react';
import { MENU } from '@constants/menuItem';
import { AuthButton, PageBarButton, PageBarList, PageBarLogo, PageBarWrapper } from '@src/components/PageBar/style';
import { MenuButton } from '@src/components/MenuButton/MenuButton';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '@store/base/selectors';
import { setModalState } from '@store/base/actions';

export const PageBar = () => {
	const [open, setOpen] = useState(false);
	const user = useSelector(getUser);
	const dispatch = useDispatch();
	
	const authClickHandler = () => {
		if (user) {
			dispatch(setModalState('exit'));
		} else {
			dispatch(setModalState('auth'));
		}
	};
	
	return (
		<PageBarWrapper open={open}>
			<PageBarButton className={open ? 'icon-close' : 'icon-more'} onClick={() => setOpen(!open)} open={open}/>
			<PageBarLogo to='/'>bDa</PageBarLogo>
			<PageBarList>
				{MENU.map((item) => {
					return (
						<MenuButton
							key={item.id}
							item={item}
						/>
					);
				})}
			</PageBarList>
			<AuthButton className={user ? 'icon-exit' : 'icon-user'} onClick={() => authClickHandler()}/>
		</PageBarWrapper>
	);
};
