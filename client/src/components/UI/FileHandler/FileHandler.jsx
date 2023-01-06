import React from 'react';
import PropTypes from 'prop-types';
import {
	FileHandlerDesign,
	FileHandlerImage,
	FileHandlerImageWrapper,
	FileHandlerInput,
	FileHandlerWrapper,
} from './style';

const FileHandler = ({ acceptArr, onChange, multiple, value, width, height, disabled }) => {
	return (
		<FileHandlerWrapper isValue={value.length} width={width} height={height} disabled={disabled}>
			
			{value[0]
				? (
					<FileHandlerImageWrapper disabled={disabled}>
						<FileHandlerImage src={URL.createObjectURL(value[0])}/>
					</FileHandlerImageWrapper>
				)
				:	(
					<FileHandlerDesign>
						<span className='icon-upload'/>
						<p>Upload photo</p>
					</FileHandlerDesign>
				)}
			<FileHandlerInput onChange={onChange} name='files' type='file' accept={acceptArr} multiple={multiple} disabled={disabled}/>
		</FileHandlerWrapper>
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
};

export default FileHandler;
