import styled from 'styled-components';

export const QuizWrapper = styled.div`
	min-height: 100vh;
  position: relative;
`;

export const QuizContent = styled.div`
  position: relative;
  display: flex;
	flex-direction: column;
	overflow-y: scroll;
  min-height: 100vh;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: #0199fe;
  }
`;

export const QuizControls = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding-right: 60px;
`;

export const QuizUpContent = styled.div`
	margin-bottom: 30px;
  padding: 0 40px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	
	button {
		height: 35px;
		margin-left: 20px;
	}
`;

export const QuizTitleWrapper = styled.div`
	flex-basis: 80%;
  display: flex;
	align-items: center;
`;

export const QuizTitle = styled.h2`
	font-weight: 500;
	font-size: 40px;
	margin: 10px 0;
`;
