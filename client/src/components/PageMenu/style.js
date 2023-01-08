import styled from 'styled-components';

export const PageMenuWrapper = styled.ul`
	padding: 0;
  display: flex;
	flex-wrap: wrap;
	list-style: none;
	margin: 0 0 20px;
	
	@media (max-width: 768px) {
		width: 100%;
		justify-content: center;
	}
`;

export const PageMenuItem = styled.li`
  background: ${({ isActive, activeColor }) => (isActive ? activeColor || '#E5EAFC' : '#FFFFFF')};
  box-shadow: 17px 26px 25px rgba(226, 226, 226, 0.55);
  font-size: 16px;
  padding: 10px 20px;
	margin: 0 5px 10px;
  transition: background 0.3s;
  text-align: center;
  border-radius: 10px;
  user-select: none;
  cursor: pointer;
  text-transform: capitalize;
	color: ${({ isActive, activeColor }) => (isActive ? activeColor ? '#fff' : '#000' : '#000')};
	
  &:hover {
	  background: ${({ isActive, activeColor }) => (isActive ? activeColor || '#fff' : '#e1cffc')};
  }
	
	&:first-child {
		margin-left: 0;
	}
`;
