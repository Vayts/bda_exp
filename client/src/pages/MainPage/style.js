import styled from 'styled-components';

export const MainWrapper = styled.div`
	min-height: 100vh;
	box-sizing: border-box;
  display: flex;
	align-items: center;
	justify-content: center;
`;

export const MainContent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
  justify-content: center;
	align-items: center;
	margin: -22px 0;
`;

export const MainTitle = styled.h2`
	font-size: 40px;
	text-align: center;
`;

export const MainList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: space-between;
	width: 100%;
	max-width: 1000px;
`;
