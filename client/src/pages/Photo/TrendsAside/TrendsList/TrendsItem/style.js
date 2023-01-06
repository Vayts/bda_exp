import styled from 'styled-components';
import { COLORS } from '@constants/colors';

export const TrendItemWrapper = styled.li`
	margin-bottom: 5px;
	
`;

export const TrendTitle = styled.h5`
	font-size: 20px;
	margin: 0;
	cursor: pointer;
	user-select: none;
	
	&:hover {
		transition: all 0.2s;
		color: ${COLORS.light.primary};
	}
`;

export const TrendCounter = styled.p`
	margin: 0;
	color: #7c7b7b;
  cursor: default;
  user-select: none;
	font-weight: 300;
`;
