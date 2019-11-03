import React, { useState } from 'react';
import { Tabs, Tab, Button } from '@material-ui/core';

import Wrapper from './Wrapper';
import Store from '../../store';

const { info } = console;

const store = Store.getState();

function SecondTabsMenus(props) {

    const [tabValue, setTabValue] = useState(0);

    info(store);
    return (
        <Wrapper>
            <Tabs
                value={tabValue}
                // onChange={() => setTabValue()}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
            >
                <Tab label="ALL" onClick={() => { setTabValue(0); info(tabValue); }} />
                <Tab label="TOP100" onClick={() => { setTabValue(1); info(tabValue); }} />
                <Tab label="TEST3" onClick={() => { setTabValue(2); info(tabValue); }} />
                <Tab label="TEST4" onClick={() => { setTabValue(3); info(tabValue); }} />
            </Tabs>
            <button onClick={() => props.ListClickCounter(props.listTargetCount)} >
                {props.listTargetCount}
            </button>
        </Wrapper>
    )
}

export default SecondTabsMenus;