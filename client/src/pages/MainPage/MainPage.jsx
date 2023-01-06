import React from 'react';
import { MainContent, MainList, MainTitle, MainWrapper } from '@src/pages/MainPage/style';
import { MENU } from '@constants/menuItem';
import { PageItem } from '@src/pages/MainPage/PageItem/PageItem';

export const MainPage = () => {
	return (
		<MainWrapper>
			<MainContent>
				<MainTitle>Boring Design App</MainTitle>
				<MainList>
					{MENU.map((item) => {
						return (
							<PageItem
								key={item.id}
								page={item}
							/>
						);
					})}
				</MainList>
			</MainContent>
		</MainWrapper>
	);
};

MainPage.propTypes = {};
