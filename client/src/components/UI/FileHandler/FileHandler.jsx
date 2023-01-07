import React from 'react';
import PropTypes from 'prop-types';
import {
	FileEdit,
	FileHandlerDesign, FileHandlerHolder,
	FileHandlerImage,
	FileHandlerImageWrapper,
	FileHandlerInput,
	FileHandlerWrapper,
} from './style';

const FileHandler = ({ acceptArr, onChange, multiple, value, width, height, disabled, editable, editFunc }) => {
	return (
		<FileHandlerHolder width={width} height={height}>
			{editable && value[0] ? <FileEdit className='icon-edit' onClick={() => editFunc()}/> : null}
			<FileHandlerWrapper isValue={value.length} width={width} height={height} disabled={disabled}>
				{value[0]
					? (
						<>
							<FileHandlerImageWrapper disabled={disabled}>
								<FileHandlerImage src={URL.createObjectURL(value[0])}/>
							</FileHandlerImageWrapper>
						</>
					)
					:	(
						<FileHandlerDesign>
							<span className='icon-upload'/>
							<p>Upload photo</p>
						</FileHandlerDesign>
					)}
				<FileHandlerInput onChange={onChange} name='files' type='file' accept={acceptArr} multiple={multiple} disabled={disabled}/>
			</FileHandlerWrapper>
		</FileHandlerHolder>
	);
};

FileHandler.propTypes = {
	acceptArr: PropTypes.arrayOf(PropTypes.string),
	onChange: PropTypes.func,
	multiple: PropTypes.bool,
	value: PropTypes.array,
	width: PropTypes.string,
	height: PropTypes.string,
	disabled: PropTypes.bool,
	editable: PropTypes.bool,
	editFunc: PropTypes.func,
};

export default FileHandler;
