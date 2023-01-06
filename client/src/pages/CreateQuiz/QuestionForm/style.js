import styled from 'styled-components';

export const QuestionFormWrapper = styled.form`

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

export const QuestionFormError = styled.p`
	height: 15px;
	font-size: 14px;
	color: red;
`;

export const QuestionContentBlock = styled.div`
  flex-basis: 48%;
	margin-bottom: 10px;
`;
