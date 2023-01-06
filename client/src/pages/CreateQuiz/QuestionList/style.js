import styled from 'styled-components';
import { COLORS } from '@constants/colors';

export const QuestionListWrapper = styled.ul`
	display: flex;
	margin: 10px 0 0;
	padding: 0;
	list-style: none;
`;

export const QuestionItem = styled.li`
	background-color: ${({ valid, touched }) => (valid ? '#66bd61' : touched ? '#ee7474' : '#e1e1e1')};
	color: ${({ valid, touched }) => (valid ? '#fff' : touched ? '#ffffff' : '#868686')};
	border: ${({ active }) => (active ? `3px solid ${COLORS.light.primary}` : '3px solid transparent')};
	box-shadow: ${({ active }) => (active ? '0 0 5px #00000057' : 'none')};;
	width: 40px;
	height: 40px;
	font-size: 20px;
  display: flex;
  justify-content: center;
	align-items: center;
	margin-right: 15px;
	cursor: pointer;
	transition: all 0.2s;
	line-height: 1;
  user-select: none;
	
	&:hover {
    border: ${({ active }) => (active ? `3px solid ${COLORS.light.primary}` : '3px solid #868686')};
	}
`;

export const QuestionAddButton = styled.li`
  width: 40px;
  height: 40px;
  font-size: 25px;
	background-color: #c9c9c9;
	color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
	cursor: pointer;
	line-height: 0;
	user-select: none;
	
	span {
		transform: rotate(45deg);
	}
	
	&:hover {
		transition: all 0.2s;
		background-color: ${COLORS.light.primary};
	}
`;
