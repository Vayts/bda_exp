import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const ContextMenuWrapper = styled.div`
  position: relative;
`;

export const ContextMenuButton = styled.div`
	cursor: pointer;

  &:before {
    font-size: 25px;
    color: #6c6c6c;
  }
`;

export const ContextMenuList = styled.ul`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 100%;
  left: 100%;
  z-index: 1000;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  list-style: none;
  margin: 0;
  padding: 0;
  min-width: 140px;
	border-radius: 5px;
  animation: ${appear} 0.3s linear;

  li {
    margin: 0;
  }
`;

export const ContextMenuItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 7px 7px 7px 12px;
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;

  &:hover {
    background-color: rgba(239, 239, 239, 0.55);
  }

`;

export const ContextMenuIcon = styled.span`
  margin-right: 10px;

  &:before {
    color: #ec2c32;
  }
`;

export const ContextMenuText = styled.p`
	margin: 5px 0;
	font-size: 20px;
`;
