import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Wrapper from './Wrapper';

const { info } = console;

function SecondTabsMenus() {

    const [tabValue, setTabValue] = useState(0);


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
        </Wrapper>
    )
}

export default SecondTabsMenus;