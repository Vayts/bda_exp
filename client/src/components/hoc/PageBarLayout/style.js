import styled from 'styled-components';

export const PageBarContainer = styled.div`
	padding-left: 90px;
  width: calc(100vw - 20px);
	
	@media (max-width: 768px) {
		padding: 0;
		width: 100vw;
	}
`;
