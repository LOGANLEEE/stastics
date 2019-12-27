import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { connect } from 'react-redux';

import { ListClickCounter, listFetcher, openSite } from '../../actions';
import Buttons from 'components/Buttons';
import ListRenderer from 'components/ListRenderer';
import SecondTabsMenus from 'components/SecondTabsMenus';
import { GET_TEMP_POSTS_ORDER_BY_HITCOUNT_DESC } from '../../queryConstant';
import MainPage from 'components/MainPage';
import Wrapper from './Wrapper';

// function Fetcher(props) {
// 	const { loading, error, data } = useQuery(GET_TEMP_POSTS_ORDER_BY_HITCOUNT_DESC());

// 	if (loading) return <p>Loading...</p>;

// 	if (error) return <p>Error :(</p>;

// 	props.listFetcher(data.tempPosts);
// 	return <ListRenderer data={data.tempPosts} />;
// }

function ContentRenderer(props) {
	const { currentFirstTabId } = props;
	switch (currentFirstTabId) {
		case 0: {
			return <MainPage />;
		}
		case 1: {
			return [
				<SecondTabsMenus {...props} />,
				<Buttons key={`ContentRenderer${1}`} openSite={openSite} />,
				// <Fetcher key={`ContentRenderer${2}`} listFetcher={props.listFetcher} />,
				<ListRenderer tempPosts={props.tempPosts} />,
			];
		}
		case 2: {
			return <div> 2222</div>;
		}
		case 3: {
			return <div> 3333</div>;
		}
	}
}

function ListView(props) {
	return (
		<Wrapper width={props.width}>
			{/* <Grid container direction='column' justify='center' alignItems='stretch'> */}
			<ContentRenderer {...props} />
			{/* </Grid> */}
		</Wrapper>
	);
}

const mapDispatchToProps = {
	ListClickCounter,
	listFetcher,
	openSite,
};

const mapStatetoProps = state => ({
	tempPosts: state.initial.tempPosts,
});

export default connect(mapStatetoProps, mapDispatchToProps)(ListView);
