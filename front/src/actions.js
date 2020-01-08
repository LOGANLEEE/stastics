import * as actionTypes from 'actionTypes';
import * as sorter from 'utils/sorter';

export function Dummy(value) {
	return {
		type: actionTypes.DUMMY,
		payload: value,
	};
}

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

export const GET_TEMP_POSTS = list => ({
	type: actionTypes.GET_TEMP_POSTS,
	payload: { list },
});

export function SET_PRE_PROCESSED_LIST(preProcessedList) {
	return {
		type: actionTypes.SET_PRE_PROCESSED_LIST,
		payload: { preProcessedList },
	};
}

export const GET_TARGET_SITE_LIST = list => ({
	type: actionTypes.GET_TARGET_SITE_LIST,
	payload: { list },
});

export function LIST_ORDER_CHANGER(orderStandard) {
	return {
		type: actionTypes.LIST_ORDER_CHANGER,
		payload: { orderStandard },
	};
}

export default 'import specific actions mate.';
