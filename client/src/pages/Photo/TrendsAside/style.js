import styled from 'styled-components';
import { COLORS } from '@constants/colors';

export const TrendsWrapper = styled.aside`
  flex-basis: 20%;
  flex-grow: 0;
`;

export const TrendsContentWrapper = styled.div`
	margin-bottom: 20px;
	align-self: flex-start;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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
