import styled from 'styled-components';
import { COLORS } from '@constants/colors';

export const ProgressBarItem = styled.div`
	align-self: flex-start;
	background-color: ${COLORS.light.primary};
	height: 10px;
	width: ${({ percent }) => `${percent}%`};
	position: absolute;
	top: 0;

  @media (max-width: 768px) {
    height: 5px;
  }
`;
