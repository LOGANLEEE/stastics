import store from 'store';
import * as actions from 'actions';
import { NameOfOrderStandard } from 'internal_constants';
import moment from 'moment';

export function preListSorter(preProcessedList) {
	const list = [...preProcessedList];

	//CREATE_AT_ASC
	list.sort((a, b) => {
		return moment(a.createdAt) - moment(b.createdAt);
	});
	store.dispatch(actions.SET_SORTED_LIST(list, NameOfOrderStandard.createdAt, true));

	//CREATE_AT_DESC
	list.sort((a, b) => {
		return moment(b.createdAt) - moment(a.createdAt);
	});
	store.dispatch(actions.SET_SORTED_LIST(list, NameOfOrderStandard.createdAt, false));

	//HITCOUNT_ASC
	list.sort((a, b) => {
		return a.hitCount - b.hitCount;
	});
	store.dispatch(actions.SET_SORTED_LIST(list, NameOfOrderStandard.hitCount, true));

	//HITCOUNT_DESC
	list.sort((a, b) => {
		return b.hitCount - a.hitCount;
	});
	store.dispatch(actions.SET_SORTED_LIST(list, NameOfOrderStandard.hitCount, false));

	//REGISTERED_AT_ASC
	list.sort((a, b) => {
		return moment(a.registeredAt) - moment(b.registeredAt);
	});
	store.dispatch(actions.SET_SORTED_LIST(list, NameOfOrderStandard.registeredAt, true));

	//REGISTERED_AT_DESC
	list.sort((a, b) => {
		return moment(b.registeredAt) - moment(a.registeredAt);
	});
	store.dispatch(actions.SET_SORTED_LIST(list, NameOfOrderStandard.registeredAt, false));
}
