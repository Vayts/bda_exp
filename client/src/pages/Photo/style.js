import styled from 'styled-components';

export const PhotoContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const PhotoMain = styled.div`
  padding: 40px 40px 20px;
	width: 100%;
	align-self: center;
`;

export const PhotoContentSplitter = styled.div`
	&:first-child {
		flex-basis: 20%;
		padding-right: 20px;
		
		label {
      border: 1px solid rgba(124, 124, 124, 0.2);
			box-shadow: none;
		}
	}
	
	&:nth-child(2) {
		flex-basis: 53%;
		min-height: 100vh;
	}

  &:nth-child(3) {
    flex-basis: 17%;
    min-height: 100vh;
  }
`;
