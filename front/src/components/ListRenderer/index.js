import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import { List } from 'react-virtualized';
import Wrapper from './Wrapper';
import { NameOfOrderStandard } from 'internal_constants';

function ListRenderer(props) {
	const { processedList, LIST_ORDER_CHANGER } = props;
	const [loading, setLoading] = useState(true);
	const [list, setList] = useState([]);

	useEffect(() => {
		if (processedList.length > 0) {
			setList(processedList);
			setLoading(false);
		}
	}, [processedList]);

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
				justify='space-around'
				alignItems='stretch'
				key={key + '::' + list[index].id}
				style={style}>
				<span className='index'>{index + 1}</span>
				<span className={`from ${list[index].from}`}>{list[index].from}</span>
				<span onClick={() => windowOpener(list[index].link)} className='title'>
					{list[index].title}
				</span>
				<span className='author'>{list[index].author}</span>
				<span className='hitCount'>{list[index].hitCount}</span>
				<span className='registeredAt'>{list[index].registeredAt}</span>
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

	const widthsPercent = {
		index: 5,
		from: 10,
		title: 45,
		author: 10,
		hitCount: 10,
		registeredAt: 15,
	};

	return (
		<Wrapper widthsPercent={widthsPercent}>
			{loading ? (
				<div className='spinner'>
					<BeatLoader
						// css={override}
						size={35}
						color={'yellow'}
						loading={loading}
					/>
				</div>
			) : (
				[
					<Grid
						className='headerGrid'
						key={'ListRenderer > Grid'}
						container
						direction='row'
						justify='space-around'
						alignItems='stretch'>
						<span className='index' onClick={() => LIST_ORDER_CHANGER(NameOfOrderStandard.createdAt)}>
							<span>순서</span>
							<span className='downArrow' />
						</span>
						<span className='from'>
							<span>출처</span>
							<span className='downArrow' />
						</span>
						<span className='title'>제목</span>
						<span className='author'>작성자</span>
						<span className='hitCount' onClick={() => LIST_ORDER_CHANGER(NameOfOrderStandard.hitCount)}>
							<span>조회수</span>
							<span className='downArrow' />
						</span>
						<span
							className='registeredAt'
							onClick={() => LIST_ORDER_CHANGER(NameOfOrderStandard.registeredAt)}>
							<span>등록일</span>
							<span className='downArrow' />
						</span>
					</Grid>,
					<List
						key={'ListRenderer > List'}
						width={1500}
						height={1500}
						rowCount={list.length}
						rowHeight={38}
						rowRenderer={e => rowRenderer(e)}
						style={{ width: '100%', outline: 'none' }}
					/>,
				]
			)}
		</Wrapper>
	);
}

export default ListRenderer;
