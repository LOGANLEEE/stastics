import { combineReducers, createStore } from 'redux';

import main from 'reducers/main_reducer';
import ui from 'reducers/ui_reducer';
import initial from 'reducers/initial_reducer';
import list_view from 'reducers/list_view_reducer';

const rootReducers = combineReducers({ main, ui, initial, list_view });

// activate redux-devtools
const store = createStore(
	rootReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
		window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true }),
);

export default store;
