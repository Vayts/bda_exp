import styled from 'styled-components';
import { COLORS } from '@constants/colors';

export const ButtonItem = styled.button`
  background-color: ${COLORS.light.primary};
  outline: none;
  color: #fff;
  margin: ${({ margin }) => (margin || '10px 0 0 0')};
  padding: 10px 0;
  width: ${({ width }) => (width || 'auto')};
  border: 1px solid transparent;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: ${({ fz }) => (fz || '20px')};
  min-height: ${({ height }) => (height || '57px')};
  position: relative;
  box-shadow: 17px 26px 25px rgba(226, 226, 226, 0.25);
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.2s;
	
  &:hover {
    background-color: ${COLORS.light.hover};
  }

  &[disabled] {
    background: #e0e0e0;
		color: #7c7b7b;
		cursor: default;
  }
`;
