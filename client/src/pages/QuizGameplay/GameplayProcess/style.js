import styled from 'styled-components';
import { COLORS } from '@constants/colors';

export const GameplayProcessWrapper = styled.div`
	width: 100%;
	min-height: 100vh;
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

  @media (max-width: 768px) {
    width: 55px;
		height: 55px;
    font-size: 16px;
    top: 15px;
    right: 10px;
    border: 1px dashed ${COLORS.light.primary};
		font-weight: 600;
  }
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
	user-select: none;
`;

export const QuizStageMax = styled.p`
	color: ${COLORS.light.primary};
	font-weight: 600;
	font-size: 35px;
	margin: 0;
	line-height: 0.9;
	user-select: none;
`;

export const GamePlayQuestion = styled.h2`
	margin: 0 0 10px;
	min-height: 80px;

  @media (max-width: 768px) {
    font-size: 18px;
		min-height: 40px;
  }
`;

export const GamePlayImg = styled.img`
  width: 560px;
  height: 350px;
	display: block;
	margin: 0 auto 30px;
	border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 440px;
		height: 300px;
		margin-top: 150px;
  }
	
	@media (max-width: 500px) {
		width: 100%;
		height: auto;
	}

  @media (max-height: 800px) {
    margin-top: 100px;
  }
`;

export const GameplayMainWindow = styled.div`
	width: 1200px;
	
	@media (max-width: 1250px) {
		width: 750px;
	}

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const GameplayBottomContent = styled.div`
  width: 100%;
  border-top: 1px solid rgba(124, 123, 123, 0.25);
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
`;
