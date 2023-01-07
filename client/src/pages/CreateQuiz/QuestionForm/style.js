import styled from 'styled-components';

export const QuestionFormWrapper = styled.form`

`;

export const QuestionFormUpperWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

export const QuestionFormUpperSplitter = styled.div`
	flex-grow: 1;
	padding: ${({ padding }) => (padding ? '0 0 0 40px' : '0')};
`;

export const QuestionFormSplitter = styled.div`
  display: flex;
  justify-content: space-between;
	width: 100%;
`;

export const QuestionFormTitle = styled.h5`
	font-size: 16px;
	margin: 20px 0 10px;
  position: absolute;
	top: 10px;
	right: 40px;
	color: #7c7b7b;
`;

export const QuestionContentBlock = styled.div`
  flex-basis: 48%;
	margin-bottom: 10px;
`;
