import styled, { keyframes } from 'styled-components';
import { COLORS } from '@constants/colors';

const appear = keyframes`
  from {
   	transform: scale(0.99);
  }

  to {
    transform: scale(1);
  }
`;

const background = keyframes`
  from {
   	opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const ModalBackground = styled.div`
  height: 100vh;
  transition: ${({ open }) => (open ? 'opacity 0.4s' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  bottom: 0;
  display: flex;
	justify-content: center;
	align-items: center;
  background-color: rgba(0, 0, 0, 0.45);
  overflow: hidden;
  animation: ${background} 0.1s linear;
`;

export const ModalWindow = styled.div`
  background-color: #fff;
  border-radius: 10px;
  position: absolute;
  z-index: 100;
  padding: 20px 30px;
  animation: ${appear} 0.1s linear;
	margin: 10px;
`;

export const CloseModal = styled.div`
  position: absolute;
	top: 5px;
	right: 5px;
  display: flex;
  justify-content: center;
	align-items: center;
	
	span {
		&:before {
      font-size: 28px;
		}
	}
	
	&:hover {
    cursor: pointer;
		
		span {
			&:before {
        color: ${COLORS.light.primary};
			}
		}
	}
	
`;
