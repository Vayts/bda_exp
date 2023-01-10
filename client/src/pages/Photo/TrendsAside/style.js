import styled from 'styled-components';
import { COLORS } from '@constants/colors';

export const TrendsWrapper = styled.aside`
  flex-grow: 0;
	position: sticky;
	top: 40px;
	
	label {
		box-shadow: none;
    border: 1px solid rgba(124, 124, 124, 0.2);
	}
`;

export const TrendsReset = styled.p`
  text-decoration: underline;
  text-align: center;
  color: #737373;
	cursor: pointer;
`;

export const TrendsContentWrapper = styled.div`
	margin-bottom: 20px;
	align-self: flex-start;
  border: 1px solid rgba(124, 124, 124, 0.2);
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
`;

export const TrendsTitle = styled.h3`
	text-align: left;
	margin: 10px 0 10px;
	font-size: 25px;
	color: ${COLORS.light.primary};
`;
