import styled from 'styled-components';

export const QuizAnswerButtons = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	padding: 10px 0;
	margin-top: 20px;
	div {
		flex-basis: calc(50% - 20px);

    @media (max-width: 768px) {
      flex-basis: 100%;
			font-size: 14px;
			min-height: 50px;
			margin-bottom: 10px;
    }
	}
`;
