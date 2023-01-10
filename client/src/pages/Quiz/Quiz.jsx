import React, { useEffect, useState } from 'react';
import {
	QuizContent, QuizControls, QuizTitle, QuizTitleWrapper, QuizUpContent,
	QuizWrapper,
} from '@src/pages/Quiz/style';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getQuizFetch, getQuizTrendsFetch, setCategory, setCurrent, setQuizSearch } from '@store/quiz/actions';
import { getCategory, getQuizTrends, getSearch } from '@store/quiz/selectors';
import { QuizList } from '@src/pages/Quiz/QuizList/QuizList';
import { PageMenu } from '@src/components/PageMenu/PageMenu';
import { COLORS } from '@constants/colors';
import { Button } from '@src/components/UI/Button/Button';
import { Loader } from '@src/components/Loader/Loader';
import { removeModal, setModalState } from '@store/base/actions';
import { getUser } from '@store/base/selectors';
import { Search } from '@src/components/UI/Search/Search';
import { resetFiltersAction } from '@store/photo/actions';

export const Quiz = () => {
	const dispatch = useDispatch();
	const category = useSelector(getCategory);
	const quizTrends = useSelector(getQuizTrends);
	const user = useSelector(getUser);
	const search = useSelector(getSearch);
	const navigate = useNavigate();
	const [currentPage, setCurrentPage] = useState(1);
	const [isLoading, setLoading] = useState(true);
	
	useEffect(() => {
		document.title = 'bDa - Quiz';
		dispatch(getQuizFetch(setLoading, category, search));
		setCurrentPage(1);
		
		if (!quizTrends.length) {
			dispatch(getQuizTrendsFetch());
		}
		
		return () => {
			dispatch(setCurrent(null));
			dispatch(removeModal());
			dispatch(resetFiltersAction());
		};
	}, [category, search]);
	
	const navigateToCreate = () => {
		navigate('/quiz/create');
	};
	
	const openAllCategories = () => {
		dispatch(setModalState('quizCategories'));
	};
	
	return (
		<QuizWrapper>
			<QuizContent>
				<>
					<QuizUpContent>
						<QuizTitleWrapper>
							<QuizTitle>Quizzes</QuizTitle>
							{user ? <Button text='Create quiz' height='20px' width='200px' fz='14px' clickHandler={() => navigateToCreate()}/> : null}
						</QuizTitleWrapper>
						<Search placeholder='Quiz name' width='300px' margin='10px 20px 0 0' height='35px' fz='16px' value={search} action={setQuizSearch}/>
					</QuizUpContent>
					<QuizControls>
						<PageMenu
							menuList={[{ value: 'all', text: 'all' }, ...quizTrends.slice(0, 5)]}
							selector={getCategory}
							action={setCategory}
							activeColor={COLORS.light.primary}
						/>
						<Button text='All categories' clickHandler={() => openAllCategories()} margin='0' fz='12px' height='20px' width='150px'/>
					</QuizControls>
					{isLoading ? <Loader/>
						: (
							<>
								<QuizList currentPage={currentPage} setCurrentPage={setCurrentPage}/>
							</>
						)}
				</>
			</QuizContent>
		</QuizWrapper>
	);
};
