import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useOutsideClick } from '@src/hooks/useOutsideClick';
import {
	DropdownButton,
	DropdownContent, DropdownItem, DropdownTitle,
	DropdownWrapper,
} from './style';

export const Select = ({ arr, onChange, selectValue, placeholder, title, setState, img, margin, disabled, validation }) => {
	const wrapperRef = useRef(null);
	const [open, setOpen] = useState(false);
	
	const closeOnOutsideClick = () => {
		setOpen(false);
	};
	useOutsideClick(wrapperRef, closeOnOutsideClick);
	
	const openDropDown = () => {
		if (!disabled) {
			setOpen(!open);
		}
	};
	
	const clickHandler = (el) => {
		return () => {
			onChange.call(null, el);
			setOpen(null);

			if (setState) {
				setState(el);
			}
		};
	};
	
	return (
		<DropdownWrapper ref={wrapperRef} margin={margin} disabled={disabled}>
			<DropdownTitle title={title}>{title}</DropdownTitle>
			<DropdownButton onClick={openDropDown} colored={!!selectValue} open={open} validation={validation}>
				{img ? <img src={`./assets/img/${selectValue.toLowerCase()}.png`} alt='flag'/> : null}
				{selectValue || placeholder}
				<i className={open ? 'icon-arrow-up' : 'icon-arrow-down'}/>
			</DropdownButton>
			<DropdownContent>
				{open
					? arr.map((el) => {
						if (el.value !== selectValue) {
							return (
								<DropdownItem
									key={uuidv4()}
									onClick={clickHandler(el)}
								>
									{img ? <img src={`./assets/img/${el.icon}.png`} alt='flag'/> : null}
									{el.value}
								</DropdownItem>
							);
						}
						return null;
					})
					: null}
			</DropdownContent>
		</DropdownWrapper>
	);
};

Select.propTypes = {
	arr: PropTypes.array,
	selectValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	title: PropTypes.string,
	setState: PropTypes.func,
	img: PropTypes.bool,
	margin: PropTypes.string,
	disabled: PropTypes.bool,
	validation: PropTypes.string,
};
