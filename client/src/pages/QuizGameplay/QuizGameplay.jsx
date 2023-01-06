import React, { useEffect, useState } from 'react';
import { QuizGameplayWrapper } from '@src/pages/QuizGameplay/style';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getGameQuiz } from '@store/quiz/selectors';
import { getQuiz } from '@store/quiz/actions';
import { GameplayProcess } from '@src/pages/QuizGameplay/GameplayProcess/GameplayProcess';
import { Loader } from '@src/components/Loader/Loader';
import { removeModal } from '@store/base/actions';

export const QuizGameplay = () => {
	const gameQuiz = useSelector(getGameQuiz);
	const [isLoading, setLoading] = useState(true);
	const params = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	useEffect(() => {
		dispatch(getQuiz(params.id, setLoading, navigate));
		
		return () => {
			dispatch(removeModal());
		};
	}, []);
	
	return (
		<QuizGameplayWrapper>
			{isLoading ? <Loader size={80}/> : gameQuiz
				? <GameplayProcess quizItem={gameQuiz}/>
				:	null}
		</QuizGameplayWrapper>
	);
};

QuizGameplay.propTypes = {};
