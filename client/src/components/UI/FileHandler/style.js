import styled, { css } from 'styled-components';
import { COLORS } from '@constants/colors';

export const FileHandlerHolder = styled.div`
  position: relative;
  width: ${({ width }) => (width || '450px')};
  height: ${({ height }) => (height || '300px')};
  margin: 20px 0 20px;
`;

export const FileHandlerWrapper = styled.label`
  width: 100%;
  height: 100%;
  border: 1px dashed transparent;
  display: block;
  background-color: ${({ disabled }) => (disabled ? '#eeeeee' : '#fff')};
  min-height: 60px;
  border-radius: 10px;
  font-family: 'Mulish', sans-serif;
  position: relative;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.5s;

  &:hover {
    ${({ disabled }) => {
		if (!disabled) {
			return css`
        transition: all 0.3s;
        background-color: rgba(238, 238, 238, 0.7);

        span {
          &:before {
            color: #000000;
          }
        }

        p {
          color: #000000;
        }
      `;
		}
		return css`
        cursor: default;
      	transition: all 0.5s;
      `;
	}
}
`;

export const FileHandlerImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 10px;
  transition: all 0.4s;
  background-color: rgba(0, 0, 0, 0.65);
	
	${({ disabled }) => {
		if (!disabled) {
			return css`
					&:hover {
						background-color: rgba(0, 0, 0, 0.85);
          	z-index: 2;

          img {
            opacity: 0.2
          }

          &:before {
            //display: block;
						opacity: 1;
            z-index: 10;
          }
        `;
		}
	}
}
}

    &:before {
      content: 'Change';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
			opacity: 0;
      z-index: 100;
      color: #fff;
      font-size: 25px;
			transition: all 0.23s;
    }
`;

export const FileEdit = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -5px;
  right: -5px;
  z-index: 10;
  border-radius: 50%;
  background-color: #fff;
	cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	transition: all 0.5s;
	
	&:hover {
		background-color: ${COLORS.light.primary};
		
		&:before {
			color: #fff;
		}
	}

  &:before {
    font-size: 25px;
    color: ${COLORS.light.primary};
  }
`;

export const FileHandlerImage = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 0.4s;
  object-fit: cover;
  border-radius: 10px;
`;
export const FileHandlerDesign = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  span {
    &:before {
      font-size: 30px;
    }
  }

  p {
    text-transform: uppercase;
    margin-left: 10px;
    font-weight: 800;
    color: #7c7b7b;
  }
`;
export const FileHandlerInput = styled.input`
  visibility: hidden;
  display: none;
`;
