import React, { useEffect, useState } from 'react';
import { List } from 'react-virtualized';
import Grid from '@material-ui/core/Grid';
import * as sorter from 'utils/sorter';

import Wrapper from './Wrapper';

function ListRenderer(props) {
	const [tempPosts, setTempPosts] = useState([]);
	const [isAsc, setIsAsc] = useState(true);
	const [orderStandard, setOrderStandard] = useState('index');

	useEffect(() => {
		setTempPosts(props.tempPosts);
		setIsAsc(props.isAsc);
		setOrderStandard(props.orderStandard);
	});

	function rowRenderer({
		key, // Unique key within array of rows
		index, // Index of row within collection
		isScrolling, // The List is currently being scrolled
		isVisible, // This row is visible within the List (eg/ it is not an overscanned row)
		style, // Style object to be applied to row (to position it)
	}) {
		return (
			<Grid
				className='listGrid'
				container
				direction='row'
				justify='center'
				alignItems='stretch'
				key={tempPosts[index].id}
				// onClick={() => console.info(data[index].link)}
				style={style}>
				<span className='index'>{index + 1}</span>
				<span onClick={() => orderChanger(index, 'from')} className={`from ${tempPosts[index].from}`}>
					{tempPosts[index].from}
				</span>
				<span className='title'>{tempPosts[index].title}</span>
				<span className='author'>{tempPosts[index].author}</span>
				<span onClick={() => orderChanger(index, 'hitCount')} className='hitCount'>
					{tempPosts[index].hitCount}
				</span>
				<span onClick={() => orderChanger(index, 'registeredAt')} className='registeredAt'>
					{tempPosts[index].registeredAt}
				</span>
			</Grid>
		);
	}

	function orderChanger(index, value) {
		if (index === 0) {
			sorter.listSorter(tempPosts, orderStandard, isAsc);
			props.LIST_ORDER_CHANGER(value);
		}
	}

	return (
		<Wrapper>
			<List
				width={1500}
				height={1500}
				rowCount={tempPosts.length}
				rowHeight={38}
				rowRenderer={rowRenderer}
				style={{ width: '100%', outline: 'none' }}
			/>
			,
		</Wrapper>
	);
}

export default ListRenderer;
