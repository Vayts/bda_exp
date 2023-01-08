import styled from 'styled-components';
import { COLORS } from '@constants/colors';

export const AnswerButtonWrapper = styled.div`
  width: 100%;
  background-color: ${({ isActive }) => (isActive ? COLORS.light.primary : '#fff')};
	box-shadow: ${({ isActive }) => (isActive ? '0 0 10px rgba(0, 0, 0, 0.4)' : '0 0 10px rgba(0, 0, 0, 0.2)')};
	color: ${({ isActive }) => (isActive ? '#fff' : '#000')};
  margin-bottom: 25px;
  height: auto;
	padding: 0 10px;
	min-height: 80px;
  display: flex;
  justify-content: center;
	align-items: center;
  user-select: none;
  cursor: pointer;
	border-radius: 5px;
	text-align: center;
`;
