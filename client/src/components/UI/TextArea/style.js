import styled from 'styled-components';

export const TextAreaWrapper = styled.div`
	margin: 10px 0 10px 0;
`;

export const TextAreaInput = styled.textarea`
  height: ${({ height }) => (height || '40px')};
  font-size: ${({ fontSize }) => (fontSize || '14px')};
  width: ${({ width }) => (width || 'auto')};
  outline: none;
  resize: none;
  position: relative;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  padding: 15px 15px 15px 10px;
  font-family: 'Source Sans Pro', sans-serif;
  width: ${({ width }) => (width || '100%')};
  border: ${({ validation }) => {
		if (validation === 'unTouched') {
			return '1px solid transparent';
		}
		if (validation === 'valid') {
			return '1px solid #cdffcb';
		}
		if (validation === 'error') {
			return '1px solid #ffcbcb';
		}
		return '1px solid transparent';
	}};
  margin: 0;
  background-color: ${({ disabled }) => (disabled ? '#e0e0e0' : '#fff')};
	border-radius: 5px;

  &::placeholder {
    color: #a6a6a6;
    font-size: 14px;
    font-weight: 300;
  }
`;
