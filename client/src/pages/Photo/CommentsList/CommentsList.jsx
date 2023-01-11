import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
	CommentsIcon,
	CommentsListButton,
	CommentsListHolder,
	CommentsListItem,
	CommentsListWrapper, CommentUserLogin,
	CommentUserText,
} from '@src/pages/Photo/CommentsList/style';
import axios from '@src/api/axios';
import { getNotification } from '@src/notifications/notification';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from '@store/photo/selectors';
import { getUser } from '@store/base/selectors';
import { deleteComment } from '@store/photo/actions';
import { useAxiosPrivate } from '@src/hooks/useAxiosPrivate';

export const CommentsList = ({ photo, counter }) => {
	const [comments, setComments] = useState([]);
	const [open, setOpen] = useState(false);
	const photos = useSelector(getPhotos);
	const user = useSelector(getUser);
	const dispatch = useDispatch();
	const axiosPrivate = useAxiosPrivate();
	
	useEffect(() => {
		setOpen(false);
	}, [photos]);
	
	const getComments = async () => {
		if (!open) {
			try {
				const response = await axios.get(`/photo/comments/${photo._id}`);
				setComments(response.data.value);
				setOpen(true);
			} catch (e) {
				getNotification('Something went wrong', 'error');
			}
		} else {
			setOpen(false);
		}
	};
	
	const deleteCommentHandler = (id) => {
		dispatch(deleteComment(axiosPrivate, id, photo._id, photos));
	};
	
	return (
		<CommentsListWrapper>
			{counter ? (
				<>
					<CommentsListButton onClick={() => getComments()}>{open ? 'Close comments' : `Show comments (${counter})` }</CommentsListButton>
					{open ? (
						<CommentsListHolder>
							{comments.map((item) => {
								return (
									<CommentsListItem key={item._id}>
										<CommentUserText>
											<CommentUserLogin>{item.comment_author_login}</CommentUserLogin>
											{item.text}
										</CommentUserText>
										{user?._id === photo.author_id || user?._id === item.comment_author_id ? <CommentsIcon onClick={() => deleteCommentHandler(item._id)} className='icon-delete'/> : null}
									</CommentsListItem>
								);
							})}
						</CommentsListHolder>
					) : null}
				</>
			) : null}
		</CommentsListWrapper>
	);
};

CommentsList.propTypes = {
	photo: PropTypes.shape({
		_id: PropTypes.string,
		author_id: PropTypes.string,
		author: PropTypes.string,
		source: PropTypes.string,
		title: PropTypes.string,
		description: PropTypes.string,
		categories: PropTypes.array,
		likes: PropTypes.number,
		byUser: PropTypes.array,
		favorite: PropTypes.array,
		time: PropTypes.string,
		comments: PropTypes.number,
	}),
	counter: PropTypes.number,
};
