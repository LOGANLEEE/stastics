import store from 'store';
import * as actions from 'actions';
import * as internal_constants from 'internal_constants';

export function listSorter(postList, orderStandard, isAsc) {
	console.info('£££ i thoigh i was called?:', postList, orderStandard, isAsc);

	let preProcessedList = [];

	switch (orderStandard) {
		case internal_constants.orderStandard.index: {
			break;
		}
		case internal_constants.orderStandard.hitCount: {
			preProcessedList = [...postList];
			preProcessedList.sort((a, b) => {
				if (isAsc) {
					return a.hitCount - b.hitCount;
				} else {
					return b.hitCount - a.hitCount;
				}
			});
			store.dispatch(actions.SET_PROCESSED_LIST(preProcessedList));
			break;
		}
		case internal_constants.orderStandard.registeredAt: {
			break;
		}
	}
}
