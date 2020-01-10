import React, { useEffect, useState } from 'react';
import { List } from 'react-virtualized';
import Grid from '@material-ui/core/Grid';
import * as sorter from 'utils/sorter';

import Wrapper from './Wrapper';

function ListRenderer(props) {
	const { processedList, orderStandard, isAsc } = props;

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
				key={processedList[index].id}
				// onClick={() => console.info(data[index].link)}
				style={style}>
				<span className='index'>{index + 1}</span>
				<span onClick={() => orderChanger(index, 'from')} className={`from ${processedList[index].from}`}>
					{processedList[index].from}
				</span>
				<span onClick={() => windowOpener(processedList[index].link)} className='title'>
					{processedList[index].title}
				</span>
				<span className='author'>{processedList[index].author}</span>
				<span onClick={() => orderChanger(index, 'hitCount')} className='hitCount'>
					{processedList[index].hitCount}
				</span>
				<span onClick={() => orderChanger(index, 'registeredAt')} className='registeredAt'>
					{processedList[index].registeredAt}
				</span>
			</Grid>
		);
	}

	function windowOpener(value) {
		{
			if (value !== null && value !== '') {
				window.open(value);
			}
		}
	}

	function orderChanger(index, value) {
		if (index === 0) {
			sorter.listSorter(processedList, value, !isAsc);
			props.LIST_ORDER_CHANGER(value);
		}
	}

	return (
		<Wrapper>
			<List
				width={1500}
				height={1500}
				rowCount={processedList.length}
				rowHeight={38}
				rowRenderer={rowRenderer}
				style={{ width: '100%', outline: 'none' }}
			/>
			,
		</Wrapper>
	);
}

export default ListRenderer;
