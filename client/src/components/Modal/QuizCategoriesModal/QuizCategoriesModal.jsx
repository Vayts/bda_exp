import React from 'react';
import { QuizCategoryModalWrapper, QuizCategoryTitle } from '@src/components/Modal/QuizCategoriesModal/style';
import { PageMenu } from '@src/components/PageMenu/PageMenu';
import { useSelector } from 'react-redux';
import { getCategory, getQuizTrends } from '@store/quiz/selectors';
import { setCategory } from '@store/quiz/actions';
import { COLORS } from '@constants/colors';

export const QuizCategoriesModal = () => {
	const categories = useSelector(getQuizTrends);
	
	return (
		<QuizCategoryModalWrapper>
			<QuizCategoryTitle>Categories</QuizCategoryTitle>
			<PageMenu
				menuList={categories}
				selector={getCategory}
				action={setCategory}
				activeColor={COLORS.light.primary}
			/>
		</QuizCategoryModalWrapper>
	);
};

QuizCategoriesModal.propTypes = {};
