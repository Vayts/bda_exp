import styled from 'styled-components';

export const InputLabel = styled.label`
  position: relative;
	display: block;
	margin: ${({ margin }) => (margin || '0 0 30px 0')};
`;

export const InputElem = styled.input`
  height: ${({ height }) => (height || '40px')};
  font-size: ${({ fontSize }) => (fontSize || '14px')};
  width: ${({ width }) => (width || 'auto')};
  outline: none;
  border: ${({ validation }) => {
		if (validation === 'unTouched') {
			return '1px solid transparent';
		}
		if (validation === 'valid') {
			return '1px solid #cdffcb';
		}
		if (validation === 'error') {
			return '1px solid transparent';
		}
		return '1px solid transparent';
	}};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  padding: 0 10px;
  font-family: 'Source Sans Pro', sans-serif;
  -moz-appearance: textfield;
  background-color: ${({ disabled }) => (disabled ? '#e0e0e0' : '#fff')};
	border-radius: 5px;

  &::placeholder {
    color: #a6a6a6;
    line-height: 18px;
    font-size: ${({ fontSize }) => (fontSize || '14px')};
  }

  &:hover {
    transition: all 0.1s;
  }

  &:focus {
    outline: 1px solid #9f9f9f;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

`;

export const InputTitle = styled.p`
	font-size: 18px;
	color: #7c7b7b;
	margin-bottom: 10px;
`;
