import 'utils/config';
import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';
import store from 'store';
import { Provider } from 'react-redux';

import FooterContainer from 'containers/FooterContainer';
import HeaderContainer from 'containers/HeaderContainer';
import LeftSideBarContainer from 'containers/LeftSideBarContainer';
import RightSideBarContainer from 'containers/RightSideBarContainer';
import MainContainer from 'containers/MainContainer';
import { loading } from 'initial';

import Wrapper from 'containers/MainContainer/Wrapper';

export default {
	title: 'MainContainer',
	component: MainContainer,
	decorators: [
		withKnobs,
		story => <Provider store={store}>{story()}</Provider>,
	],
};

export function Main() {
	loading();
	return (
		<Wrapper>
			<MainContainer {...object('store', { ...store })} />
		</Wrapper>
	);
}
export function Footer() {
	return <FooterContainer />;
}
export function Header() {
	return <HeaderContainer />;
}
export function LeftSide() {
	return <LeftSideBarContainer />;
}
export function RightSide() {
	return <RightSideBarContainer />;
}
