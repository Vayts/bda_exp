import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const PageBarLogo = styled(NavLink)`
	display: block;
	text-decoration: none;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 1px solid rgba(115, 108, 235, 0.26);
  margin: 10px 0 40px;
  font-weight: 700;
  font-size: 25px;
  color: #736ceb;
`;

export const PageBarWrapper = styled.div`
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	
	@media (max-width: 768px) {
		display: none;
	}
`;

export const PageBarList = styled.ul`
	display: flex;
	flex-direction: column;
	padding: 0 10px;
	margin: 0;
`;

export const AuthButton = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(189, 192, 199, 0.09);
  width: 60px;
  height: 60px;
	display: flex;
  justify-content: center;
	align-items: center;
  border-radius: 50%;
	cursor: pointer;

  &:hover {
    background-color: rgba(228, 226, 252, 0.5);
  }

  &:before {
    font-size: 30px;
  }
`;
