import styled from 'styled-components';
import { COLORS } from '@constants/colors';

export const QuizCategoryModalWrapper = styled.div`

  ul {
    padding: 20px;
    max-height: 500px;
    overflow-y: auto;
		justify-content: space-between;

    li {
      flex-basis: calc(30%);
			margin: 5px 0 !important;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const QuizCategoryTitle = styled.h3`
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
  color: ${COLORS.light.primary};
`;
