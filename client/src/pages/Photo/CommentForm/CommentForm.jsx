import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CommentFormButton, CommentFormIcon, CommentFormInput, CommentFormWrapper } from '@src/pages/Photo/CommentForm/style';
import { useDispatch, useSelector } from 'react-redux';
import { useAxiosPrivate } from '@src/hooks/useAxiosPrivate';
import { postUserComment } from '@store/photo/actions';
import { getPhotos } from '@store/photo/selectors';

export const CommentForm = ({ photo }) => {
	const [comment, setComment] = useState('');
	const dispatch = useDispatch();
	const axiosPrivate = useAxiosPrivate();
	const photos = useSelector(getPhotos);
	
	const submit = () => {
		const data = {
			text: comment.replace(/ +/g, ' ').trim(),
			photo_author_id: photo.author_id,
			photo_id: photo._id,
		};
		setComment('');
		dispatch(postUserComment(axiosPrivate, data, photo._id, photos));
	};
	
	const validate = () => {
		if (!comment.length) {
			return false;
		}
		if (!comment.trim().length) {
			return false;
		}
		if (!comment.replace(/ +/g, ' ').trim().length) {
			return false;
		}
		if (comment.replace(/ +/g, ' ').trim().length > 255) {
			return false;
		}
		return true;
	};
	
	return (
		<CommentFormWrapper>
			<CommentFormIcon className='icon-comment'/>
			<CommentFormInput placeholder='Send your comment...' value={comment} onChange={(e) => setComment(e.target.value)}/>
			<CommentFormButton type='submit' disabled={!validate()} onClick={() => submit()}>Post</CommentFormButton>
		</CommentFormWrapper>
	);
};

CommentForm.propTypes = {
	photo: PropTypes.shape({
		_id: PropTypes.string,
		author: PropTypes.string,
		author_id: PropTypes.string,
	}),
};
