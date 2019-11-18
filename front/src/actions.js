import * as actionTypes from './actionTypes';

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

export function openSite(min, max) {
	return {
		type: actionTypes.OPEN_SITE_FROM_MIN_TO_MAX,
		payload: { min, max },
	};
}

export default 'import specific actions mate.';
