import styled from 'styled-components';
import { COLORS } from '@constants/colors';

export const EditPhotoModalWrapper = styled.div`
	padding: 10px 0;
`;

export const EditPhotoTitle = styled.h3`
  text-align: center;
  margin: 5px 0 20px;
  color: ${COLORS.light.primary};
`;

export const EditModalButtons = styled.div`
	margin-top: 20px;
  display: flex;
	justify-content: space-around;
`;
