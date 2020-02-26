import * as actionTypes from 'actionTypes';
import { FIRST_MENU, SECOND_MENU } from 'internal_constants';

const initialState = {
	firstMenu: FIRST_MENU.LIST,
	secondMenu: SECOND_MENU.ALL,
	isDayMode: false,
};

export default function ui(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FIRST_TAB_MOVER: {
			const { tabId } = action.payload;
			return { ...state, firstMenu: tabId };
		}
		case actionTypes.SECOND_TAB_MOVER: {
			const { tabId } = action.payload;
			return { ...state, secondMenu: tabId };
		}
		case actionTypes.MODE_CHANGER: {
			const { mode } = action.payload;
			return { ...state, isDayMode: !mode };
		}
		default:
			return { ...state };
	}
}
