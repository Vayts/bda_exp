import styled from 'styled-components';

export const PhotoContent = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
  }
	
	@media (max-width: 768px) {
		max-width: 100vw;
		overflow: hidden;
	}
`;

export const PhotoMain = styled.div`
  padding: 40px 40px 20px;
	width: 100%;
	align-self: center;
`;

export const PhotoContentSplitter = styled.div`
	
	&:first-child {
		flex-basis: 20%;
		
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

  @media (max-width: 1200px) {
    flex-basis: 45%;
    min-height: auto !important;

    aside {
      flex-grow: 0;
      position: relative;
    }

    &:nth-child(1) {
      flex-basis: 40%;
			order: 1;
			margin-bottom: 30px;
    }

    &:nth-child(2) {
      flex-basis: 100%;
			order: 3;
    }

    &:nth-child(3) {
      order: 2;
			flex-basis: 40%;
    }
  }

  @media (max-width: 768px) {
    box-sizing: border-box;

    aside {
      flex-grow: 0;
      position: relative;
    }

    &:nth-child(1) {
      flex-basis: 100%;
      order: 1;
      margin-bottom: 30px;
			padding: 0 40px;
    }

    &:nth-child(2) {
      flex-basis: 100%;
      order: 3;
    }

    &:nth-child(3) {
      order: 2;
      flex-basis: 100%;
      padding: 0 40px;
    }
  }
`;
