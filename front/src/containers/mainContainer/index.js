import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

// import { Dummy } from '../../actions';
import Wrapper from './Wrapper';
import 'react-virtualized/styles.css'; // only needs to be imported once

import Header from '../HeaderContiner';
import Footer from '../FooterContiner';
import LeftSideBar from '../LeftSideBarContiner';
import RightSideBar from '../RightSideBarContiner';
import Body from '../BodyContiner';




function Main(props) {
    // const [count, setState] = useState(0);

    useEffect(() => {
        document.title = `${props.title}`;
    });

    return (
        <Wrapper >
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="stretch"
            >
                <Header />
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="stretch"
                >
                    <LeftSideBar width={'15%'} />
                    <Body width={'70%'} {...props} />
                    <RightSideBar width={'15%'} />
                </Grid>
                <Footer />
            </Grid>
        </Wrapper >

    )
}

const mapStateToProps = (state, ownProps) => ({
    mainTest: state.main.mainTest,
    listTargetCount: state.main.listTargetCount,
});


export default connect(mapStateToProps, null)(Main);