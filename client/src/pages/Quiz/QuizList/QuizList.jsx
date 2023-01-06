import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getQuizList } from '@store/quiz/selectors';
import { QuizItem } from '@src/pages/Quiz/QuizList/QuizItem/QuizItem';
import { Pagination } from '@src/components/UI/Pagination/Pagination';
import PropTypes from 'prop-types';
import { NothingHolder, QuizListBottomContent, QuizListContent, QuizListWrapper } from './style';

export const QuizList = ({ currentPage, setCurrentPage }) => {
	const list = useSelector(getQuizList);
	const quizPerPage = 20;
	const [currentQuizzes, setCurrentQuizzes] = useState([]);
	
	useEffect(() => {
		const lastPhotoIndex = currentPage * quizPerPage;
		const firstPhotoIndex = lastPhotoIndex - quizPerPage;
		setCurrentQuizzes(list.slice(firstPhotoIndex, lastPhotoIndex));
		window.scrollTo(0, 0);
	}, [currentPage, list]);
	
	return (
		<QuizListWrapper>
			{list.length
				? (
					<>
						<QuizListContent>
							{currentQuizzes.map((item) => {
								return (
									<QuizItem key={item._id} quiz={item}/>
								);
							})}
						</QuizListContent>
						<QuizListBottomContent>
							{list.length <= quizPerPage ? null
								: (
									<Pagination
										length={list.length}
										perPage={quizPerPage}
										setPage={setCurrentPage}
										currentPage={currentPage}
										updateParam={list}
									/>
								)}
						</QuizListBottomContent>
					</>
				)
				: <NothingHolder>Nothing=(</NothingHolder>}
		</QuizListWrapper>
	);
};

QuizList.propTypes = {
	currentPage: PropTypes.number,
	setCurrentPage: PropTypes.func,
};
