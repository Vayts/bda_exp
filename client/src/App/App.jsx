import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '@hoc/Layout/Layout';
import { Converter } from '@src/pages/Converter/Converter';
import { Quiz } from '@src/pages/Quiz/Quiz';
import { Photo } from '@src/pages/Photo/Photo';
import { MainPage } from '@src/pages/MainPage/MainPage';
import { CreateQuiz } from '@src/pages/CreateQuiz/CreateQuiz';
import { PageBarLayout } from '@hoc/PageBarLayout/PageBarLayout';
import { QuizGameplay } from '@src/pages/QuizGameplay/QuizGameplay';
import { getModalState } from '@store/base/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '@src/components/Modal/Modal';
import { refreshUser } from '@store/base/actions';
import RequireAuth from '@hoc/RequireAuth/RequireAuth';
import { Loader } from '@src/components/Loader/Loader';
import { AppWrapper } from './style';
import { NoPage } from '../pages/NoPage/NoPage';

function App() {
	const dispatch = useDispatch();
	const [isLoading, setLoading] = useState(true);
	
	useEffect(() => {
		dispatch(refreshUser(setLoading));
	}, []);
	const modal = useSelector(getModalState);
	
	return (
		isLoading ? <Loader size={100}/>
			: (
				<AppWrapper modal={modal}>
					{modal ? <Modal/> : null}
					<Routes>
						<Route path="/" element={<Layout/>}>
							<Route path="/" element={<MainPage/>}/>
							<Route path="/main" element={<MainPage/>}/>
							<Route path="quiz/play/:id" element={<QuizGameplay/>}/>
						</Route>
						<Route path="/" element={<PageBarLayout/>}>
							<Route path="/converter" element={<Converter/>}/>
							<Route path="/quiz" element={<Quiz/>}/>
							<Route path="/" element={<RequireAuth/>}>
								<Route path="/quiz/create" element={<CreateQuiz/>}/>
							</Route>
							<Route path="/photo" element={<Photo/>}/>
						</Route>
						<Route path='*' element={<NoPage/>} />
					</Routes>
					<ToastContainer
						position="top-right"
						autoClose={5000}
						hideProgressBar
						newestOnTop={false}
						closeOnClick
						rtl={false}
						draggable={false}
						theme="colored"
					/>
				</AppWrapper>
			)
	);
}

export default App;
