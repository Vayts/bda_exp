import styled from 'styled-components';
import { COLORS } from '@constants/colors';

export const CommentFormWrapper = styled.form`
	display: flex;
	align-items: center;
	padding: 10px 20px;
  border-top: 1px solid rgba(124, 124, 124, 0.2);
`;

export const CommentFormIcon = styled.div`
  &:before {
    color: #bbbbbb;
    font-size: 30px;
  }
`;

export const CommentFormInput = styled.input`
	flex-grow: 1;
	border: none;
	padding: 5px 0;
  display: flex;
	align-items: center;
	font-size: 18px;
	margin: 0 20px;
	
	&:focus {
		outline: none;
	}
`;

export const CommentFormButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${COLORS.light.primary};
  margin: 0 0 0 20px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: ${COLORS.light.hover};
  }

  &:disabled {
    color: #9182a9;
		cursor: default;
  }
`;
