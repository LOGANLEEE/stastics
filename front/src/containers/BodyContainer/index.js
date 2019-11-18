import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

import { ListClickCounter, listFetcher, openSite } from '../../actions';
import {
	GET_TEMP_POSTS_LAST_100,
	GET_TEMP_POSTS_ALL,
	GET_TEMP_POSTS_ORDER_BY_HITCOUNT_DESC,
} from '../../queryConstant';
import ListRenderer from '../../components/ListRenderer';
import SecondTabsMenus from '../../components/SecondTabsMenus';
import Wrapper from './Wrapper';

function Fetcher(props) {
	const { loading, error, data } = useQuery(GET_TEMP_POSTS_ORDER_BY_HITCOUNT_DESC());
	if (loading) return <p>Loading...</p>;

	if (error) return <p>Error :(</p>;

	props.listFetcher(data.tempPosts);
	return <ListRenderer data={data.tempPosts} />;
}

function Body(props) {
	return (
		<Wrapper width={props.width}>
			<Grid container direction='column' justify='center' alignItems='stretch'>
				<SecondTabsMenus {...props} />
			</Grid>
			<Fetcher listFetcher={props.listFetcher} />
		</Wrapper>
	);
}

const mapDispatchToProps = {
	ListClickCounter,
	listFetcher,
	openSite,
};

export default connect(null, mapDispatchToProps)(Body);
