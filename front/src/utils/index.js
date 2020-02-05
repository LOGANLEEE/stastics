import store from 'store';
import * as actions from 'actions';
import { orderStandard } from 'internal_constants';
import moment from 'moment';

export function preListSorter(preProcessedList) {
	const list = [...preProcessedList];

	//CREATE_AT_ASC
	list.sort((a, b) => {
		return moment(a.createdAt) - moment(b.createdAt);
	});
	store.dispatch(actions.SET_SORTED_LIST(list, orderStandard.createdAt, true));

	//CREATE_AT_DESC
	list.sort((a, b) => {
		return moment(b.createdAt) - moment(a.createdAt);
	});
	store.dispatch(actions.SET_SORTED_LIST(list, orderStandard.createdAt, false));

	//HITCOUNT_ASC
	list.sort((a, b) => {
		return a.hitCount - b.hitCount;
	});
	store.dispatch(actions.SET_SORTED_LIST(list, orderStandard.hitCount, true));

	//HITCOUNT_DESC
	list.sort((a, b) => {
		return b.hitCount - a.hitCount;
	});
	store.dispatch(actions.SET_SORTED_LIST(list, orderStandard.hitCount, false));

	//REGISTERED_AT_ASC
	list.sort((a, b) => {
		return moment(a.registeredAt) - moment(b.registeredAt);
	});
	store.dispatch(actions.SET_SORTED_LIST(list, orderStandard.registeredAt, true));

	//REGISTERED_AT_DESC
	list.sort((a, b) => {
		return moment(b.registeredAt) - moment(a.registeredAt);
	});
	store.dispatch(actions.SET_SORTED_LIST(list, orderStandard.registeredAt, false));
}

export function preListSorterTester(preProcessedList) {
	const list = [...preProcessedList];
	console.info('preListSorterTester');

	//CREATE_AT_ASC
	store.dispatch(
		actions.SET_SORTED_LIST(
			list.sort((a, b) => {
				return moment(a.createdAt) - moment(b.createdAt);
			}),
			orderStandard.createdAt,
			true,
		),
	);

	//CREATE_AT_DESC
	store.dispatch(
		actions.SET_SORTED_LIST(
			list.sort((a, b) => {
				return moment(b.createdAt) - moment(a.createdAt);
			}),
			orderStandard.createdAt,
			false,
		),
	);

	//HITCOUNT_ASC
	store.dispatch(
		actions.SET_SORTED_LIST(
			list.sort((a, b) => {
				return a.hitCount - b.hitCount;
			}),
			orderStandard.hitCount,
			true,
		),
	);

	//HITCOUNT_DESC
	store.dispatch(
		actions.SET_SORTED_LIST(
			list.sort((a, b) => {
				return b.hitCount - a.hitCount;
			}),
			orderStandard.hitCount,
			false,
		),
	);

	//REGISTERED_AT_ASC
	store.dispatch(
		actions.SET_SORTED_LIST(
			list.sort((a, b) => {
				return moment(a.registeredAt) - moment(b.registeredAt);
			}),
			orderStandard.registeredAt,
			true,
		),
	);

	//REGISTERED_AT_DESC
	store.dispatch(
		actions.SET_SORTED_LIST(
			list.sort((a, b) => {
				return moment(b.registeredAt) - moment(a.registeredAt);
			}),
			orderStandard.registeredAt,
			false,
		),
	);
}
