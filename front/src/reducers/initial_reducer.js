import * as actionTypes from 'actionTypes';
import { orderStandard } from 'internal_constants';
import { preListSorter, preListSorterTester } from 'utils';

const initialState = {
	preProcessedList: [],
	targetSiteList: [],
	sortedList: {
		sortedListByCreateAt_ASC: [],
		sortedListByHitCount_ASC: [],
		sortedListByRegisteredAt_ASC: [],
		sortedListByCreateAt_DESC: [],
		sortedListByHitCount_DESC: [],
		sortedListByRegisteredAt_DESC: [],
	},
};

export default function initial(state = initialState, action) {
	switch (action.type) {
		case actionTypes.GET_TARGET_SITE_LIST: {
			const { list } = action.payload;
			return { ...state, targetSiteList: [...list] };
		}
		case actionTypes.OPEN_SITE_FROM_MIN_TO_MAX: {
			const { min, max } = action.payload;
			if (state.processedList.length > 0) {
				for (let i = min - 1; i < max; i++) {
					window.open(state.processedList[i].link, '_blank');
				}
			}
			return { ...state };
		}
		case actionTypes.GET_PREPROCESSED_LIST: {
			const { list } = action.payload;
			return { ...state, preProcessedList: [...list] };
		}
		case actionTypes.SET_SORTED_LIST: {
			const { list, type, isASC } = action.payload;
			const { sortedList } = state;
			// if i put 'list' itself then i didn't really change.
			// with spread operator [...list] works..!!
			if (isASC) {
				switch (type) {
					case orderStandard.createdAt: {
						sortedList.sortedListByCreateAt_ASC = [...list];
						break;
					}
					case orderStandard.hitCount: {
						sortedList.sortedListByHitCount_ASC = [...list];
						break;
					}
					case orderStandard.registeredAt: {
						sortedList.sortedListByRegisteredAt_ASC = [...list];
						break;
					}
					default:
						break;
				}
			} else {
				switch (type) {
					case orderStandard.createdAt: {
						sortedList.sortedListByCreateAt_DESC = [...list];
						break;
					}
					case orderStandard.hitCount: {
						sortedList.sortedListByHitCount_DESC = [...list];
						break;
					}
					case orderStandard.registeredAt: {
						sortedList.sortedListByRegisteredAt_DESC = [...list];
						break;
					}
					default:
						break;
				}
			}
			return { ...state, sortedList };
		}
		default:
			return { ...state };
	}
}
