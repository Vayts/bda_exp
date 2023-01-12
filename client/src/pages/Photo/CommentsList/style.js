import styled from 'styled-components';

export const CommentsListWrapper = styled.div`
  flex-grow: 1;
`;

export const CommentsListButton = styled.p`
  margin: 0;
  user-select: none;
  color: #a8a8a8;
	cursor: pointer;

  &:hover {
    color: #565656;
  }
`;
export const CommentsListHolder = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	
	li {
		margin: 0;
		padding: 0;
	}
`;

export const CommentsListItem = styled.li`
  position: relative;
  border-bottom: 1px solid rgba(128, 128, 128, 0.1);
	
	&:last-child {
		border: none;
	}
`;

export const CommentsIcon = styled.span`
  position: absolute;
	right: 0;
	top: 0;
	
	&:before {
		font-size: 14px;
		color: #ec2c32;
		cursor: pointer;
	}
`;

export const CommentUserLogin = styled.span`
	font-weight: 700;
	font-size: 16px;
	margin-right: 10px;
`;

export const CommentUserText = styled.p`
  font-size: 16px;
	word-break: break-word;
	padding-right: 30px;
`;
