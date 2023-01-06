import styled from 'styled-components';
import { COLORS } from '@constants/colors';
import { Link } from 'react-router-dom';

export const PageItemWrapper = styled.li`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
	border-radius: 5px;
	overflow: hidden;
	flex-basis: 30%;
`;

export const PageButtonTitle = styled.h3`
	background-color: ${COLORS.light.primary};
	margin: 0;
	padding: 10px 30px;
	color: #fff;
	text-align: center;
`;

export const PageContent = styled.div`
	padding: 20px;
  background-color: #fff;
`;

export const PageDescription = styled.p`
	text-align: center;
	min-height: 120px;
  color: #7c7b7b;
	margin: 3px 0 10px;
`;

export const PageLink = styled(Link)`
	display: inline-block;
	margin-left: auto;
`;

export const PageButtonSubTitle = styled.h5`
	margin: 2px 0 5px;
	font-size: 18px;
`;

export const PageButtonList = styled.ul`
	margin: 0 0 10px;
	padding: 0 0 0 20px;
	color: #7c7b7b;
`;

export const PageButtonInfoItem = styled.li`
	font-size: 17px;
`;
