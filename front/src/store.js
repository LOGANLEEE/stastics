import { combineReducers, createStore } from 'redux';

import main from 'reducers/mainReducer';
import ui from 'reducers/ui';

const rootReducers = combineReducers({ main, ui });

// activate redux-devtools
const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
