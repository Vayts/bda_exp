import React from 'react';
import { ExitModalButtons, ExitModalTitle, ExitModalWrapper } from '@src/components/Modal/ExitModal/style';
import { Button } from '@src/components/UI/Button/Button';
import { useDispatch } from 'react-redux';
import { logout, setModalState } from '@store/base/actions';

export const ExitModal = () => {
	const dispatch = useDispatch();
	
	const exit = () => {
		dispatch(logout());
		dispatch(setModalState(null));
	};
	
	const cancel = () => {
		dispatch(setModalState(null));
	};
	
	return (
		<ExitModalWrapper>
			<ExitModalTitle>You want to exit?</ExitModalTitle>
			<ExitModalButtons>
				<Button text='Exit' fz='14px' height='40px' clickHandler={() => exit()} width='120px' margin='0 20px 0 0'/>
				<Button text='Cancel' fz='14px' height='40px' clickHandler={() => cancel()} width='120px' margin='0 0 0 20px'/>
			</ExitModalButtons>
		</ExitModalWrapper>
	);
};
