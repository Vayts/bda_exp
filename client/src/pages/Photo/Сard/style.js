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

const like = keyframes`
  0% {
    transform: scale(1);
  }
	
	50% {
    transform: scale(1.3);
	}

  100% {
    transform: scale(1);
  }
`;

export const CardWrapper = styled.li`
  margin-bottom: 30px;
  animation: ${appear} ${({ order }) => `0.${order * 3 + 2}s`} linear;
  border-radius: 2px;
  border: 1px solid rgba(124, 124, 124, 0.2);
`;

export const CardTitleWrapper = styled.div`
	padding: 10px 10px;
  display: flex;
	align-items: center;
	position: relative;
	background-color: #fff;
	width: 100%;
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

export const CardImageWrapper = styled.div`
  width: 100%;
  height: 550px;
  position: relative;
`;

export const CardTime = styled.span`
  font-size: 16px;
  color: #8f8f8f;
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const CardImage = styled.img`
  width: 100%;
	height: 100%;
  vertical-align: top;
  background-color: rgba(128, 128, 128, 0.2);
	max-height: 650px;
	object-fit: cover;
	opacity: ${({ isLoad }) => (isLoad ? '1' : '0')};
	transition: all 0.1s;
`;

export const CardBottomContent = styled.div`
	padding: 10px;
  background-color: #fff;
`;

export const CardControls = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const CardLikeWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const CardLikeCounter = styled.p`
	font-size: 20px;
	margin: 0;
`;

export const CardLikeButton = styled.div`
	cursor: pointer;
	margin-right: 10px;
	transition: all 0.2s;
	
	&:before {
		font-size: 30px;
		color: ${COLORS.light.primary};
	}
	
	&.active {
    animation: ${like} 0.4s linear;
	}
`;

export const CardFavoriteButton = styled.div`
  cursor: pointer;
  transition: all 0.2s;

  &:before {
    font-size: 35px;
    color: #f3b128;
  }

  &.active {
    animation: ${like} 0.4s linear;
  }
`;

export const CardCategories = styled.ul`
  margin: 5px 0;
  color: #4b4b4b;
	padding: 0;
	list-style: none;
  display: flex;
	flex-wrap: wrap;
	
	li {
		margin: 0 5px 5px 0;
		width: auto;
		flex-basis: auto;
	}
`;

export const CardCategoryItem = styled.li`
  color: #1272ef;
	cursor: pointer;
`;

export const CardTitle = styled.h4`
	margin: 5px 0;
	font-size: 25px;
`;

export const CardDescription = styled.p`
	margin: 5px 0;
	color: #7c7b7b;
`;
