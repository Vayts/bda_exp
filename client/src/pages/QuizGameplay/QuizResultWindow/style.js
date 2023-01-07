import styled from 'styled-components';
import { COLORS } from '@constants/colors';

export const ResultWrapper = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
	border-radius: 15px;
	overflow: hidden;
	min-width: 660px;
	background-color: #fff;
`;

export const ResultUpWrapper = styled.div`
  padding: 20px 20px 50px;
	text-align: center;
  background-color: ${({ resultValue }) => {
		if (resultValue < 40) {
			return '#a44b4b';
		}
		if (resultValue < 70) {
			return '#e0d053';
		}
		return '#4f9b67';
	}};
`;

export const ResultTitle = styled.h3`
	margin: 0 0 20px;
	font-size: 22px;
	font-weight: 600;
	color: #fff;
`;

export const ResultValue = styled.h2`
	margin: 0;
	font-size: 40px;
  color: #fff;
	font-weight: 700;
`;

export const ResultBottomWrapper = styled.div`
	margin-top: -10px;
	background-color: #fff;
	border-top-right-radius: 15px;
  border-top-left-radius: 15px;
	padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
	flex-direction: column;
  justify-content: center;
	align-items: flex-start;
`;

export const ResultSubTitle = styled.h4`
	margin: 10px 0;
	font-size: 22px;
	color: ${COLORS.light.primary};
`;

export const ResultQuizText = styled.p`
	font-size: 20px;
	margin-top: 0;
	margin-bottom: 10px;
`;

export const ResultButtons = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	margin-top: 50px;
`;
