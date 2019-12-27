import React from 'react';
import { List } from 'react-virtualized';
import Grid from '@material-ui/core/Grid';

import Wrapper from './Wrapper';

function ListRenderer(props) {

    const { data } = props;

    function rowRenderer({
        key,         // Unique key within array of rows
        index,       // Index of row within collection
        isScrolling, // The List is currently being scrolled
        isVisible,   // This row is visible within the List (eg/ it is not an overscanned row)
        style        // Style object to be applied to row (to position it)
    }) {
        return (
            <Grid
                className='listGrid'
                container
                direction="row"
                justify="center"
                alignItems="stretch"
                key={data[index].id}
                // onClick={() => console.info(data[index].link)}
                style={style}
            >
                <span className="index">
                    {index + 1}
                </span>
                <span className={`from ${data[index].from}`}  >
                    {data[index].from}
                </span>
                <span className="title" >
                    {data[index].title}
                </span>
                <span className="author"  >
                    {data[index].author}
                </span>
                <span className="hitCount"  >
                    {data[index].hitCount}
                </span>
                <span className="registeredAt"  >
                    {data[index].registeredAt}
                </span>
            </Grid >
        )
    }

    return (
        <Wrapper>
            <List
                width={1500}
                height={1500}
                rowCount={data.length}
                rowHeight={38}
                rowRenderer={rowRenderer}
                style={{ width: '100%', outline: 'none' }}
            />,
        </Wrapper >
    )
}

export default ListRenderer;