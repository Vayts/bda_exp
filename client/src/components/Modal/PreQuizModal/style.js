import styled from 'styled-components';

export const PreQuizWrapper = styled.div`
	padding: 20px;
	max-width: 450px;
`;

export const PreQuizImg = styled.img`
  width: 420px;
  height: 300px;
  border-radius: 10px;
  vertical-align: top;
  object-fit: cover;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
	margin-bottom: 15px;
`;

export const PreQuizDescription = styled.p`
	font-size: 18px;
	color: #7c7b7b;
	text-align: center;
	width: 420px;
	margin-bottom: 15px;
`;

export const PreQuizTitle = styled.h3`
	font-size: 25px;
	margin: 10px 0;
	text-align: center;
`;

export const PreQuizButtons = styled.div`
	display: flex;
	justify-content: space-around;
`;

export const PreQuizInfoList = styled.ul`
  display: flex;
  justify-content: center;
	padding: 0;
	list-style: none;
`;

export const PreQuizInfoItem = styled.li`
	display: flex;
  justify-content: center;
	align-items: center;
	
	&:first-child {
		margin-right: 15px;
	}
	
	font-family: 'Mulish', sans-serif;
	
  &:before {
    font-size: 25px;
		margin-right: 5px;
    color: #7c7b7b;
  }
`;

export const PreQuizInfoText = styled.p`
	margin: 0;
  font-size: 20px;
	font-weight: 300;
  color: #7c7b7b;
`;
