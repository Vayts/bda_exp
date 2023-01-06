import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getModalState } from '@store/base/selectors';
import { AddPhotoModal } from '@src/components/Modal/AddPhotoModal/AddPhotoModal';
import { PreQuizModal } from '@src/components/Modal/PreQuizModal/PreQuizModal';
import { removeModal } from '@store/base/actions';
import { useOutsideClick } from '@src/hooks/useOutsideClick';
import { AuthModal } from '@src/components/Modal/AuthModal/AuthModal';
import { ExitModal } from '@src/components/Modal/ExitModal/ExitModal';
import { QuizCategoriesModal } from '@src/components/Modal/QuizCategoriesModal/QuizCategoriesModal';
import { ModalBackground, ModalWindow, CloseModal } from './style';

export const Modal = () => {
	const modal = useSelector(getModalState);
	const dispatch = useDispatch();
	const modalRef = useRef(null);
	
	useEffect(() => {
		document.body.style.overflow = 'hidden';
		
		return () => {
			document.body.style.overflow = 'unset';
		};
	});

	const closeModalHandler = () => {
		dispatch(removeModal());
	};
	useOutsideClick(modalRef, closeModalHandler);
	const generateContent = () => {
		return (
			<ModalWindow ref={modalRef}>
				<CloseModal onClick={closeModalHandler}>
					<span className='icon-close'/>
				</CloseModal>
				{modal === 'addPhoto' && <AddPhotoModal/>}
				{modal === 'preQuiz' && <PreQuizModal/>}
				{modal === 'auth' && <AuthModal/>}
				{modal === 'exit' && <ExitModal/>}
				{modal === 'quizCategories' && <QuizCategoriesModal/>}
			</ModalWindow>
		);
	};

	return (
		<ModalBackground open={modal}>
			{generateContent()}
		</ModalBackground>
	);
};
