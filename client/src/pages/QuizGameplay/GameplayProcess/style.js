import styled from 'styled-components';
import { COLORS } from '@constants/colors';

export const GameplayProcessWrapper = styled.div`
	width: 100%;
	height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
	flex-direction: column;
	flex-grow: 1;
  position: relative;
`;

export const GameplayTimer = styled.div`
	height: 85px;
	width: 85px;
	top: 25px;
	right: 20px;
  position: absolute;
	border: 3px dashed ${COLORS.light.primary};
	display: flex;
  justify-content: center;
	align-items: center;
	border-radius: 50%;
	font-size: 25px;
	color: ${COLORS.light.txt};
`;

export const QuizStageCounter = styled.div`
  top: 30px;
  left: 25px;
  position: absolute;
	display: flex;
	align-items: center;
	line-height: 1;
`;

export const QuizStageCurrent = styled.p`
  font-size: 25px;
  margin: 0 3px 0 0;
  color: #b6b6b6;
`;

export const QuizStageMax = styled.p`
	color: ${COLORS.light.primary};
	font-weight: 600;
	font-size: 35px;
	margin: 0;
	line-height: 0.9;
`;

export const GamePlayQuestion = styled.h2`
	margin: 0 0 40px;
	min-height: 80px;
`;

export const GameplayMainWindow = styled.div`
	width: 1200px;
`;

export const GameplayBottomContent = styled.div`
  width: 100%;
  border-top: 1px solid rgba(124, 123, 123, 0.25);
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
`;
