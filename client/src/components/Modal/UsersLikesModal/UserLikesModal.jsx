import React from 'react';
import { UserLikesAvatar, UserLikesLogin, UserLikesModalWrapper, UserLikesTitle } from '@src/components/Modal/UsersLikesModal/style';
import { useSelector } from 'react-redux';
import { getUserLikes } from '@store/photo/selectors';
import { getUser } from '@store/base/selectors';

export const UserLikesModal = () => {
	const usersLikes = useSelector(getUserLikes);
	const user = useSelector(getUser);
	
	return (
		<UserLikesModalWrapper>
			<UserLikesTitle>Likes</UserLikesTitle>
			{usersLikes.length > 0 ? (
				<ul>
					{usersLikes.map((item) => {
						return (
							<li key={item._id}>
								<UserLikesAvatar>{item?.user.slice(0, 1)}</UserLikesAvatar>
								<UserLikesLogin byMe={user?.login === item?.user}>{item?.user}</UserLikesLogin>
							</li>
						);
					})}
				</ul>
			) : null}
		</UserLikesModalWrapper>
	);
};
