import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_TEMP_POSTS } from '../../queryConstant';
import ListRenderer from '../../components/ListRenderer';
import Wrapper from './Wrapper';

const { info } = console;

function Fetcher() {

    const { loading, error, data } = useQuery(GET_TEMP_POSTS());
    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error :(</p>;

    return <ListRenderer data={data.tempPosts} />
}

function Body(props) {

    return (
        <Wrapper width={props.width} >
            <Fetcher />
        </Wrapper>
    )
}

export default Body;