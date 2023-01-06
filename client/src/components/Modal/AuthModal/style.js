import styled from 'styled-components';
import { COLORS } from '@constants/colors';

export const AuthModalWrapper = styled.div`
	padding: 10px 0;
`;

export const AuthModalTitlesWrapper = styled.div`
  display: flex;
	justify-content: space-around;
	margin-bottom: 25px;
`;

export const AuthModalTitle = styled.h3`
	user-select: none;
	cursor: pointer;
	color: ${({ isActive }) => (isActive ? COLORS.light.primary : 'inherit')}};
`;
