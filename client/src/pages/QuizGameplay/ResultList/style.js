import styled from 'styled-components';
import { COLORS } from '@constants/colors';

export const ResultListWrapper = styled.ul`
	list-style: none;
  display: flex;
	flex-wrap: wrap;
	margin: 0 0 10px;
	padding: 0;
`;

export const ResultItem = styled.li`
	height: 50px;
	width: 50px;
	background-color: ${({ correct }) => (correct ? COLORS.light.primary : '#606060')};
  display: flex;
	align-items: center;
  justify-content: center;
	color: #fff;
	margin: 5px;
	font-size: 20px;
	user-select: none;
	
	&:first-child {
		margin-left: 0;
	}
`;
