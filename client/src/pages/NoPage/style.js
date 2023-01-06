import styled from 'styled-components';

export const NoPageWrapper = styled.div`
	height: 100vh;
  display: flex;
  justify-content: center;
	align-items: center;
`;

export const NoPageContent = styled.div`
  background-color: rgb(114, 107, 235);
  width: 500px;
  height: 500px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
	
	a {
    color: #fff;
		text-decoration: underline;
		font-size: 20px;
	}
`;

export const NoPageTitle = styled.h2`
	font-size: 60px;
	color: #fff;
`;

export const NoPageText = styled.p`
	font-size: 30px;
	color: #eeeeee;
`;
