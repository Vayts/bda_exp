import styled from 'styled-components';
import { COLORS } from '@constants/colors';

export const QuizListItem = styled.li`
  flex-basis: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  vertical-align: top;
  border-radius: 15px;
  overflow: hidden;
  background-color: #fff;
  margin: 0 0 30px;

  @media (min-width: 768px ) and (max-width: 1199px) {
    flex-basis: calc(50% - 20px);
    margin: 0 10px 30px;

    &:nth-child(1n + 1) {
      margin-right: 0;
    }

    &:nth-child(2n+1) {
      margin-left: 0;
    }
  }

  @media (min-width: 1200px) and (max-width: 1399px) {
    flex-basis: calc(33% - 20px);
    margin: 0 10px 30px;
  }

  @media (min-width: 1400px) {
    flex-basis: calc(25% - 20px);
    margin: 0 10px 30px;

    &:nth-child(4n + 1) {
      margin-left: 0;
    }

    &:nth-child(4n) {
      margin-right: 0;
    }
  }
`;

export const QuizItemImg = styled.img`
	width: 100%;
	height: 250px;
	object-fit: cover;
	vertical-align: top;
`;

export const QuizBottomContent = styled.div`
  -webkit-box-shadow: 3px -31px 23px 14px rgba(0,0,0,0.28);
  box-shadow: 3px -31px 23px 14px rgba(0,0,0,0.28);
	padding: 15px 25px 20px;
	z-index: 10;
  position: relative;
	
	button {
		display: block;
		margin-left: auto;
	}
`;

export const QuizCategory = styled.span`
  position: absolute;
	top: 10px;
	right: 10px;
	color: ${COLORS.light.primary};
	cursor: default;
`;

export const QuizItemTitle = styled.h4`
	margin: 15px 0 5px;
	font-size: 20px;
	font-weight: 300;
  cursor: default;
`;

export const QuizItemDescription = styled.p`
	cursor: default;
	color: #7c7b7b;
	min-height: 80px;
`;

export const QuizSubContent = styled.div`
  display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const QuizItemInfoList = styled.ul`
  display: flex;
  justify-content: flex-start;
	padding: 0;
	list-style: none;
`;

export const QuizItemInfoItem = styled.li`
	display: flex;
  justify-content: center;
	align-items: center;
	
	&:first-child {
		margin-right: 15px;
	}
	
	font-family: 'Mulish', sans-serif;
	
  &:before {
    font-size: 25px;
		margin-right: 5px;
    color: #7c7b7b;
  }
`;

export const QuizItemInfoText = styled.p`
	margin: 0;
  font-size: 20px;
	font-weight: 300;
  color: #7c7b7b;
`;
