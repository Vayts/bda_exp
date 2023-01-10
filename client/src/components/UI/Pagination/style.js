import styled from 'styled-components';
import { COLORS } from '@constants/colors';

export const PaginationWrapper = styled.div`
	display: flex;
	margin: 10px 0 30px;
	align-self: center;
	text-align: end;
`;

export const PaginationDots = styled.div`
	width: 2px;
	height: 2px;
	border-radius: 50%;
	background-color: #1d1d1d;
  margin-right: 14px;
	align-self: flex-end;
	margin-bottom: 10px;
  position: relative;
	
	&:before,&:after {
		content: '';
		display: block;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background-color: #1d1d1d;
    position: absolute;
	}
	
	&:before {
		left: -4px;
	}
	
	&:after {
		left: 4px;
	}
`;

export const PaginationItem = styled.div`
	background-color: ${({ isActive }) => (isActive ? COLORS.light.primary : 'transparent')};
	color: ${({ isActive }) => (isActive ? '#fff' : '#1d1d1d')};
	font-size: 18px;
	margin-right: 10px;
	padding: 5px 10px;
	user-select: none;
	cursor: pointer;
  display: flex;
	align-items: center;
  justify-content: center;
	
	&:hover {
		background-color: ${({ isActive }) => (isActive ? COLORS.light.primary : '#cecece')};
	}
`;
