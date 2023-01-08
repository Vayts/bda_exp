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
	padding: 0 40px;
  margin: 0 20px 0 0;
	
	@media (max-width: 768px) {
		flex-direction: column;
    justify-content: center;
    margin: 0;
		
		button {
			margin: 0 auto;
		}
	}
`;

export const QuizUpContent = styled.div`
	margin: 0 20px 30px 0;
  padding: 0 40px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	
	label {
    margin: 10px 0 0;
    padding: 0;
	}
	
	
	button {
		height: 35px;
		margin-left: 20px;
	}
	
	@media (max-width: 768px) {
		flex-direction: column;
    margin: 0 0 30px 0;
		
    label {
      width: 100% !important;
    }
		
	}
`;

export const QuizTitleWrapper = styled.div`
	flex-basis: 80%;
  display: flex;
	align-items: center;
	
	button {
		@media (max-width: 768px) {
			width: 120px;
			font-size: 14px;
		}
	}
`;

export const QuizTitle = styled.h2`
	font-weight: 500;
	font-size: 40px;
	margin: 10px 0;
	
	@media (max-width: 768px) {
		font-size: 30px;
	}
`;
