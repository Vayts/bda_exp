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

export const CardWrapper = styled.li`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	margin-bottom: 30px;
  animation: ${appear} ${({ order }) => `0.${order * 3 + 2}s`} linear;
  border-radius: 10px;
`;

export const CardTitleWrapper = styled.div`
	padding: 10px 10px;
  display: flex;
	align-items: center;
	position: relative;
`;

export const CardAuthorPhoto = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: ${COLORS.light.primary};
	margin-right: 10px;
  display: flex;
	align-items: center;
  justify-content: center;
	color: #fff;
  text-transform: uppercase;
`;

export const CardAuthorName = styled.p`
	font-size: 20px;
	margin: 0;
`;

export const CardImage = styled.img`
  width: 100%;
  vertical-align: top;
  min-height: 333px;
  background-color: rgba(128, 128, 128, 0.2);
	max-height: 650px;
	object-fit: cover;
`;

export const CardBottomContent = styled.div`
	padding: 10px;
  background-color: #fff;
`;

export const CardCategories = styled.p`
  margin: 5px 0;
  color: #4b4b4b;
`;

export const CardTitle = styled.h4`
	margin: 5px 0;
	font-size: 25px;
`;

export const CardDescription = styled.p`
	margin: 5px 0;
	color: #7c7b7b;
`;
