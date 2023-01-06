import React, { useCallback, useEffect, useState } from 'react';
import {
	ConverterBigResult, ConverterBottomText,
	ConverterContent,
	ConverterCurrencyWrapper,
	ConverterDisplay, ConverterResult, ConverterSmallResult, ConverterTitle,
	ConverterWrapper,
} from '@src/pages/Converter/style';
import { TextField } from '@src/components/UI/TextField/TextField';
import { Select } from '@src/components/UI/Select/Select';
import { CURRENCY } from '@constants/currency';
import { Button } from '@src/components/UI/Button/Button';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { clearResult, getExchangeRateFetch } from '@store/converter/actions';
import { getResult } from '@store/converter/selectors';

export const Converter = () => {
	const dispatch = useDispatch();
	const result = useSelector(getResult);
	const [isLoading, setLoading] = useState(false);
	const [selectedTo, setSelectedTo] = useState(CURRENCY[2]);
	
	const validationSchema = yup.object().shape({
		amount: yup.number().min(0.01).max(9999999999999999).required(),
		from: yup.object().required(),
		to: yup.object().required(),
	});
	
	const getFormattedResult = (result) => {
		const dotSpited = result.value.toString().split('.');
		return (
			<>
				
				<ConverterBigResult>
					{selectedTo.sign}
					{dotSpited[0]}
				</ConverterBigResult>
				{dotSpited[1] ? (
					<ConverterSmallResult>
						.
						{dotSpited[1].length > 5 ? dotSpited[1].slice(0, 5) : dotSpited[1]}
					</ConverterSmallResult>
				) : null}
			</>
		);
	};
	
	const valueSwap = (values, setFieldValue) => {
		const temp = values.to;
		setFieldValue('to', values.from);
		setFieldValue('from', temp);
		setSelectedTo(values.from);
		dispatch(clearResult());
	};
	
	useEffect(() => {
		const controller = new AbortController();
		dispatch(getExchangeRateFetch(setLoading, controller, {
			amount: 1,
			from: CURRENCY[1],
			to: selectedTo,
		}));
	}, []);
	
	const onSubmit = useCallback(async (values) => {
		const controller = new AbortController();
		dispatch(getExchangeRateFetch(setLoading, controller, values));
	}, []);
	
	const selectOnChange = (setFieldValue, name, el) => {
		dispatch(clearResult());
		setFieldValue(name, el);
	};
	
	return (
		<ConverterWrapper>
			<ConverterContent>
				<ConverterDisplay>
					<ConverterTitle>Exchange Rate</ConverterTitle>
					<ConverterResult>{result ? getFormattedResult(result) : null}</ConverterResult>
				</ConverterDisplay>
				<Formik
					initialValues={{
						amount: 1,
						from: CURRENCY[1],
						to: CURRENCY[2],
					}}
					onSubmit={onSubmit}
					validateOnChange
					validationSchema={validationSchema}
				>
					{({ values, handleSubmit, handleChange, isValid, setFieldValue }) => {
						return (
							<>
								<TextField
									type='number'
									width='100%'
									fontSize='22px'
									title='Amount'
									height='45px'
									name='amount'
									onChange={handleChange}
									value={values.amount}
								/>
								<ConverterCurrencyWrapper>
									<Select
										onChange={selectOnChange.bind(null, setFieldValue, 'from')}
										setFieldValue={setFieldValue}
										selectValue={values.from.value}
										name='from'
										arr={CURRENCY}
										title='From'
										img
									/>
									<span className='icon-swap' onClick={() => valueSwap(values, setFieldValue)}/>
									<Select
										onChange={selectOnChange.bind(null, setFieldValue, 'to')}
										setFieldValue={setFieldValue}
										selectValue={values.to.value}
										name='to'
										arr={CURRENCY}
										title='To'
										setState={setSelectedTo}
										img
									/>
								</ConverterCurrencyWrapper>
								<Button
									disabled={!isValid || isLoading}
									isLoading={isLoading}
									type="submit"
									text='Convert'
									width='100%'
									clickHandler={handleSubmit}
								/>
							</>
						);
					}}
				</Formik>
				<ConverterBottomText>{result ? result.text : null}</ConverterBottomText>
			</ConverterContent>
		</ConverterWrapper>
	);
};

Converter.propTypes = {};
