import styled from 'styled-components';
import { COLORS } from '@constants/colors';

export const ProfileAsideWrapper = styled.div`
	position: sticky;
	top: 40px;
`;

export const ProfileAsideContent = styled.div`
  margin-bottom: 20px;
  align-self: flex-start;
  border: 1px solid rgba(124, 124, 124, 0.2);
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
`;

export const ProfileUpContent = styled.div`
  display: flex;
	flex-direction: column;
  justify-content: center;
	align-items: center;
`;

export const ProfileAvatarFiller = styled.div`
	width: 100px;
	height: 100px;
  border-radius: 50%;
  background-color: ${COLORS.light.primary};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-transform: uppercase;
	font-size: 50px;
`;

export const ProfileUserLogin = styled.h3`
	margin: 10px 0;
	font-size: ${({ length }) => (length > 10 ? '20px' : '24px')};
`;

export const ProfileBottomContent = styled.ul`
	padding: 10px;
	margin: 0;
`;

export const ProfileBottomItem = styled.li`
  display: flex;
	align-items: center;
	color: ${({ isActive }) => (isActive ? COLORS.light.primary : COLORS.light.txt)};
	
	&:hover {
		cursor: ${({ isActive }) => (isActive ? 'loading' : 'pointer')};;
		color: ${({ isActive }) => (isActive ? COLORS.light.primary : COLORS.light.hover)};;
	}
`;

export const ProfileIcon = styled.span`
	margin-right: 10px;
	
	&:before {
		font-size: 25px;
	}
`;

export const ProfileText = styled.p`
  margin: 10px 0;
  font-size: 20px;
  user-select: none;
`;
