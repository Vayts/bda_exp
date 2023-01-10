import styled from 'styled-components';
import { COLORS } from '@constants/colors';

export const UserLikesModalWrapper = styled.div`
  ul {
    padding: 10px;
		min-width: 350px;
		min-height: 250px;
    max-height: 400px;
    overflow-y: auto;
    display: flex;
		flex-direction: column;

    li {
      flex-basis: 100%;
      display: flex;
			justify-content: flex-start;
			align-items: center;
    }
		
    ::-webkit-scrollbar {
      width: 5px;
    }
		
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
		
    ::-webkit-scrollbar-thumb {
      background: ${COLORS.light.primary};
    }
		
    ::-webkit-scrollbar-thumb:hover {
      background: ${COLORS.light.hover};
    }
  }
`;

export const UserLikesTitle = styled.h3`
  text-align: center;
  margin: 0 0 10px;
  color: ${COLORS.light.primary};
`;

export const UserLikesAvatar = styled.div`
	font-size: 18px;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: ${COLORS.light.primary};
  display: flex;
	color: #fff;
  justify-content: center;
	align-items: center;
	margin-right: 10px;
	text-transform: uppercase;
	user-select: none;
`;

export const UserLikesLogin = styled.p`
	font-size: 20px;
	color: ${({ byMe }) => (byMe ? '#000000' : 'inherit')};
	font-weight: ${({ byMe }) => (byMe ? 700 : 400)};;
`;
