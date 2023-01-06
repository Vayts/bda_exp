import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLORS } from '@constants/colors';

export const MenuButtonWrapper = styled.li`
	flex-basis: 33%;
	display: flex;
  justify-content: center;
	align-items: center;
`;

export const MenuButtonItem = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 20px;
  border-radius: 50%;
  margin-bottom: 15px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;

  &:hover {
    transition: all 0.2s;
    background-color: rgba(228, 226, 252, 0.5);

    span {

      &:before {
        color: ${COLORS.light.primary};
      }
    }
  }

  &.active {
    background-color: #e4e2fc;

    span {

      &:before {
        color: ${COLORS.light.primary};
      }
    }
  }
`;

export const MenuButtonIcon = styled.span`
	width: 60px;
	height: 60px;
	
	&:before {
		font-size: 30px;
		color: gray;
	}
`;
