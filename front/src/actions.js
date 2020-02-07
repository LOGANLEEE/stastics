import * as actionTypes from 'actionTypes';
import { preListSorter } from 'utils';

export const ListClickCounter = count => ({
	type: actionTypes.LIST_CLICK_COUNTER,
	payload: { count },
});

export const listFetcher = list => ({
	type: actionTypes.LIST_FETCHER,
	payload: { list },
});

export function OPEN_SITE_FROM_MIN_TO_MAX(min, max) {
	return {
		type: actionTypes.OPEN_SITE_FROM_MIN_TO_MAX,
		payload: { min, max },
	};
}

// UI
export function firstTabMover(tabId) {
	return {
		type: actionTypes.FIRST_TAB_MOVER,
		payload: { tabId },
	};
}

export function secondTabMover(tabId) {
	return {
		type: actionTypes.SECOND_TAB_MOVER,
		payload: { tabId },
	};
}

export function GET_PREPROCESSED_LIST(list) {
	preListSorter(list);
	return {
		type: actionTypes.GET_PREPROCESSED_LIST,
		payload: { list },
	};
}

export const MODE_CHANGER = mode => {
	return {
		type: actionTypes.MODE_CHANGER,
		payload: { mode },
	};
};

export function SET_SORTED_LIST(list, type, isASC) {
	return {
		type: actionTypes.SET_SORTED_LIST,
		payload: { list, type, isASC },
	};
}

export const GET_TARGET_SITE_LIST = list => ({
	type: actionTypes.GET_TARGET_SITE_LIST,
	payload: { list },
});

export function SET_PROCESSED_LIST(orderStandard, isAsc) {
	return {
		type: actionTypes.SET_PROCESSED_LIST,
		payload: { orderStandard, isAsc },
	};
}

export function LIST_ORDER_CHANGER(orderStandard) {
	return {
		type: actionTypes.LIST_ORDER_CHANGER,
		payload: { orderStandard },
	};
}

export default 'import specific actions mate.';
