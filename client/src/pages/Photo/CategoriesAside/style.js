import styled from 'styled-components';
import { COLORS } from '@constants/colors';

export const CategoriesWrapper = styled.aside`
  flex-basis: 20%;
  width: 20%;
	top: 20px;
  right: 40px;
	flex-grow: 0;
`;

export const CategoriesContentWrapper = styled.div`
	margin-bottom: 20px;
	align-self: flex-start;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
`;

export const CategoriesTitle = styled.h3`
	text-align: left;
	margin: 0 0 10px;
	font-size: 25px;
	color: ${COLORS.light.primary};
`;

export const CategoriesList = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	width: 100%;
`;

export const PhotoTitle = styled.h2`
	font-weight: 500;
	font-size: 32px;
	margin: 10px 0;
	background-color: ${COLORS.light.hover};
	color: #fff;
	border-radius: 10px;
	padding: 0 10px;
	text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const CategoriesItem = styled.li`
	padding: 3px 5px;
	font-size: 16px;
	margin: 10px 10px 10px 0;
	transition: background-color 0.2s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
	background-color: ${({ isActive }) => (isActive ? COLORS.light.primary : 'aliceblue')};
	user-select: none;
	cursor: pointer;
	color: ${({ isActive }) => (isActive ? '#fff' : '#000')};
`;

export const CategoriesResult = styled.p`
	margin: 5px 0;
	color: #7c7b7b;
	text-align: center;
`;
