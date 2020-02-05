import { combineReducers, createStore } from 'redux';

import main from 'reducers/main_reducer';
import ui from 'reducers/ui_reducer';
import initial from 'reducers/initial_reducer';

const rootReducers = combineReducers({ main, ui, initial });

// activate redux-devtools
const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
