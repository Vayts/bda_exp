import styled from 'styled-components';
import { ErrorMessage } from 'formik';

export const ErrorTextWrapper = styled(ErrorMessage)`

`;

export const ErrorText = styled.p`
  width: 100%;
  font-size: 14px;
  color: #c44f4f;
  margin: 0;
  padding: 0 15px;
  text-align: center;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 5px 0;
  height: 16px;
`;
