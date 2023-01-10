import styled from 'styled-components';

export const PhotoListWrapper = styled.div`
  display: flex;
  justify-content: center;
	flex-direction: column;
	padding: 0;
`;

export const PhotoListContent = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
  display: flex;
	flex-wrap: wrap;
	
	li {
		flex-basis: 100%;
		margin: 0 20px 20px 20px;
	}
`;

export const PhotoListFiller = styled.h3`
  position: absolute;
	top: 50%;
	left: 50%;
`;
