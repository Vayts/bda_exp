import styled from 'styled-components';

export const FormWrapper = styled.form`
  position: relative;
`;

export const FormUpperContent = styled.div`
  display: flex;
	justify-content: space-between;
	align-items: flex-start;
	
	@media (max-width: 1200px) {
		flex-direction: column;
    justify-content: center;
		align-items: center;
	}
`;

export const FormMainInfo = styled.div`
	flex-grow: 1;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const FormBottomContent = styled.div`
  display: flex;
	flex-grow: 1;
	width: 100%;
	justify-content: flex-end;
`;
