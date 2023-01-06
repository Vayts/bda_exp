import styled from 'styled-components';
import { COLORS } from '@constants/colors';

export const ConverterWrapper = styled.div`
	min-height: 100vh;
  display: flex;
	align-items: center;
  justify-content: center;
`;

export const ConverterContent = styled.div`
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
  border-top: 7px solid ${COLORS.light.primary};
  padding: 35px 35px 125px;
  min-width: 650px;
	background-color: #fff;
  position: relative;
`;

export const ConverterDisplay = styled.div`
	margin-bottom: 50px;
`;

export const ConverterTitle = styled.h2`
  font-size: 16px;
  text-align: center;
  color: #b6b6b6;
	margin: 5px 0;
	font-weight: 400;
`;

export const ConverterResult = styled.div`
	font-size: 30px;
	margin: 5px 0;
  display: flex;
	align-items: flex-end;
  justify-content: center;
	min-height: 40px;
	text-align: end;
`;

export const ConverterBigResult = styled.p`
  font-weight: 700;
	margin: 0;
	align-self: flex-end;
	line-height: 1;
`;

export const ConverterSmallResult = styled.p`
	font-size: 25px;
	color: #7c7b7b;
	margin: 0;
  line-height: 1;
`;

export const ConverterCurrencyWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-bottom: 45px;
	
	span {
		margin: 0 40px 12px;
		align-self: flex-end;
		
		&:before {
			font-size: 22px;
		}
		
		&:hover {
			
			&:before {
        transition: all 0.2s;
				cursor: pointer;
				color: #000;
			}
		}
	}
`;

export const ConverterBottomText = styled.p`
	position: absolute;
	bottom: 15px;
	right: 15px;
  color: #b6b6b6;
	font-size: 14px;
`;
