import styled from 'styled-components';

export const SearchWrapper = styled.label`
  position: relative;
  height: ${({ height }) => (height || '50px')};;
  box-sizing: border-box;
	width: ${({ width }) => (width || '100%')};
	display: inline-block;
	background-color: #fff;
	margin: ${({ margin }) => (margin || '0 20px 20px 0')};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
`;

export const SearchInput = styled.input`
  height: 100%;
	width: 100%;
  box-sizing: border-box;
	border: none;
  font-size: ${({ fz }) => (fz || '20px')};
	padding: 0 40px 0 10px;
	background-color: transparent;
	
	&:focus {
		outline: none;
	}
`;

export const SearchIcon = styled.span`
  position: absolute;
	top: 50%;
	right: 10px;
	transform: translateY(-50%);
	
	&:before {
		font-size: 25px;
	}
`;
