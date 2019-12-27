import * as actionTypes from 'actionTypes';

const initialState = {
	currentFirstTabId: 0, // 0: main , 1:list, 2:site, 3:rank
	currentSecondTabId: 0,
};

export default function ui(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FIRST_TAB_MOVER: {
			const { tabId } = action.payload;
			return { ...state, currentFirstTabId: tabId };
		}
		case actionTypes.SECOND_TAB_MOVER: {
			const { tabId } = action.payload;
			return { ...state, currentSecondTabId: tabId };
		}
		default:
			return { ...state };
	}
}
