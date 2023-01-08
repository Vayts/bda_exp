import styled from 'styled-components';

export const QuizListWrapper = styled.div`
	width: 100%;
	margin: 0;
  padding: 20px 40px;
`;

export const QuizListContent = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
	padding: 0;
  list-style: none;
`;

export const QuizListBottomContent = styled.div`
	display: flex;
	justify-content: center;
`;

export const NothingHolder = styled.h4`
  position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
`;
