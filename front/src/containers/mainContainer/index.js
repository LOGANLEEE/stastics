import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import { dummy } from '../../actions';
import Wrapper from './Wrapper';

import Header from '../HeaderContiner';
import Footer from '../FooterContiner';
import LeftSideBar from '../LeftSideBarContiner';
import RightSideBar from '../RightSideBarContiner';
import Body from '../BodyContiner';




function Main(props) {
    // const [count, setState] = useState(0);

    useEffect(() => {
        document.title = ` ${props.title} `;
    });

    return (
        <Wrapper props={props} >
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
                    <LeftSideBar width={'10%'} />
                    <Body width={'80%'} />
                    <RightSideBar width={'10%'} />
                </Grid>
                <Footer />
            </Grid>
        </Wrapper >

    )
}

const mapStateToProps = (state, ownProps) => ({
    mainTest: state.main.mainTest,

});

const mapDispatchToProps = dispatch => ({
    dummy: (value) => dispatch(dummy(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);