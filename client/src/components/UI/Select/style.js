import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  width: 100%;
  font-size: 22px;
  position: relative;
	background-color: ${({ disabled }) => (disabled ? '#e0e0e0' : '#fff')};
	margin: ${({ margin }) => (margin || 0)};

  img {
    width: 16px;
    margin-right: 5px;
  }
`;

export const DropdownButton = styled.div`
  user-select: none;
	cursor: pointer;
  background-color: transparent;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
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
  text-overflow: ellipsis;
  display: flex;
	align-items: center;
  padding-left: 10px;
	overflow: hidden;
  white-space: nowrap;
	height: 40px;
  position: relative;
	font-size: 14px;
  text-transform: capitalize;
	color: ${({ colored }) => (colored ? 'inherit' : '#a6a6a6')};
  border-radius: 5px;
	
	i {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 10px;
	}
`;

export const DropdownTitle = styled.p`
  font-size: 18px;
  color: #7c7b7b;
	margin: ${({ title }) => (title ? '0 0 10px 0' : '0')};;
`;

export const DropdownContent = styled.div`
  position: absolute;
	top: 105%;
	width: 100%;
	z-index: 100;
  box-shadow: 0 0 10px rgba(132, 132, 132, 0.35);
`;

export const DropdownItem = styled.div`
  height: 30px;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 18px;
  padding: 5px 5px;
  white-space: nowrap;
  user-select: none;
  background-color: #fff;
  text-align: left;
  display: flex;
  align-items: center;
  text-transform: capitalize;

  &:hover {
    transition: all 0.1s;
    cursor: pointer;
    background-color: #e3e3e3;
  }
`;
