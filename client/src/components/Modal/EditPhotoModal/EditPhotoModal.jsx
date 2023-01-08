import React, { useEffect, useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { EditModalButtons, EditPhotoModalWrapper, EditPhotoTitle } from '@src/components/Modal/EditPhotoModal/style';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotoEdit } from '@store/base/selectors';
import { Button } from '@src/components/UI/Button/Button';
import { getNotification } from '@src/notifications/notification';
import { setCurrentPhotoEdit, setModalState, setScale } from '@store/base/actions';

export const EditPhotoModal = () => {
	const editData = useSelector(getPhotoEdit);
	const editor = useRef(null);
	const dispatch = useDispatch();
	
	useEffect(() => {
		return () => {
			dispatch(setScale(1));
			dispatch(setCurrentPhotoEdit(null, null));
		};
	}, []);
	
	const saveHandler = () => {
		if (editor) {
			const canvas = editor.current.getImage().toDataURL();
			
			fetch(canvas).then((res) => res.blob())
				.then((blob) => {
					const type = editData.currentPhoto.name.split('.').pop();
					const name = editData.currentPhoto.name;
					const result = new File([blob], name, { type: `image/${type}`, lastModified: new Date().getTime() });
					editData.func(result);
					dispatch(setModalState(null));
				})
				.catch(() => {
					getNotification('Something went wrong', 'error');
				});
		}
	};
	
	const onMouseWheel = (e) => {
		const delta = e.deltaY || e.detail;
		const scaleModifier = delta > 0 ? -0.1 : +0.1;
		const newScaleData = editData.scale + scaleModifier;
		
		if (newScaleData >= 1 && newScaleData < 3) {
			dispatch(setScale(newScaleData));
		}
	};
	
	return (
		<EditPhotoModalWrapper>
			<EditPhotoTitle>Edit photo</EditPhotoTitle>
			<AvatarEditor
				ref={editor}
				image={editData.photo}
				width={editData.width}
				height={editData.height}
				border={50}
				color={[255, 255, 255, 0.6]}
				scale={editData.scale}
				rotate={0}
				onWheel={(e) => onMouseWheel(e)}
				style={{ backgroundColor: 'rgba(121,96,187,0.14)', borderRadius: '10px' }}
			/>
			<EditModalButtons>
				<Button text='Save' width='100px' height='25px' clickHandler={() => saveHandler()} fz='14px'/>
				<Button text='Cancel' width='100px' height='25px' clickHandler={() => dispatch(setModalState(null))} fz='14px'/>
			</EditModalButtons>
		</EditPhotoModalWrapper>
	);
};

EditPhotoModal.propTypes = {};
