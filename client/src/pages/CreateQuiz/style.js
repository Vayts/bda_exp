import styled, { keyframes } from 'styled-components';
import { COLORS } from '@constants/colors';

const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const CreateQuizWrapper = styled.div`
	width: 1100px;
	margin: 20px auto 0;
	
	@media (max-width: 1250px) {
		width: 700px;
	}
`;

export const CreateQuizTitle = styled.h2`
  text-align: center;
  margin: 0;
  padding: 0;
  font-size: 30px;
  color: #fff;
`;

export const CreateQuizBlock = styled.div`
  background-color: ${({ color }) => (color || '#fff')};
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
	flex-grow: 1;
	margin-bottom: 40px;
  padding: 20px 40px 20px;
  animation: ${appear} 0.1s linear;
  position: relative;
`;

export const CreateQuizSubTitle = styled.h3`
  text-align: left;
  margin: 0;
  padding: 10px 10px 10px 0;
  font-size: 26px;
  color: ${COLORS.light.primary};
`;

export const CreateQuizButtonWrapper = styled.div`
  display: flex;
	justify-content: ${({ jc }) => (jc || 'center')};
`;
