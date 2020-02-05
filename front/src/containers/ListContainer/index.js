import Buttons from 'components/Buttons';
import ListRenderer from 'components/ListRenderer';
import MainPage from 'components/MainPage';
import SecondTabsMenus from 'components/SecondTabsMenus';
import React from 'react';
import { connect } from 'react-redux';
import { OPEN_SITE_FROM_MIN_TO_MAX } from '../../actions';
import Wrapper from './Wrapper';

function ContentRenderer(props) {
	const { currentFirstTabId } = props;
	switch (currentFirstTabId) {
		case 0: {
			return <MainPage />;
		}
		case 1: {
			return [
				<SecondTabsMenus key={`ContentRenderer > SecondTabsMenus`} {...props} />,
				<Buttons
					key={`ContentRenderer > Buttons`}
					OPEN_SITE_FROM_MIN_TO_MAX={props.OPEN_SITE_FROM_MIN_TO_MAX}
				/>,
				<ListRenderer key={`ContentRenderer > ListRenderer`} tempPosts={props.tempPosts} />,
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

function ListContainer(props) {
	return (
		<Wrapper width={props.width}>
			<ContentRenderer {...props} />
		</Wrapper>
	);
}

const mapDispatchToProps = {
	OPEN_SITE_FROM_MIN_TO_MAX,
};

const mapStatetoProps = state => ({});

export default connect(mapStatetoProps, mapDispatchToProps)(ListContainer);