import * as actionTypes from 'actionTypes';
import { NameOfOrderStandard } from 'internal_constants';

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
	processedList: [],
	length_of_processedList: 0,
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
			return {
				...state,
				length_of_processedList: list.length,
				preProcessedList: [...list],
				processedList: [...list],
			};
		}
		case actionTypes.SET_SORTED_LIST: {
			const { list, type, isASC } = action.payload;
			const { sortedList } = state;

			// if i put 'list' itself then i didn't really change.
			// with spread operator [...list] works..!!
			if (isASC) {
				switch (type) {
					case NameOfOrderStandard.createdAt: {
						sortedList.sortedListByCreateAt_ASC = [...list];
						break;
					}
					case NameOfOrderStandard.hitCount: {
						sortedList.sortedListByHitCount_ASC = [...list];
						break;
					}
					case NameOfOrderStandard.registeredAt: {
						sortedList.sortedListByRegisteredAt_ASC = [...list];
						break;
					}
					default:
						break;
				}
			} else {
				switch (type) {
					case NameOfOrderStandard.createdAt: {
						sortedList.sortedListByCreateAt_DESC = [...list];
						break;
					}
					case NameOfOrderStandard.hitCount: {
						sortedList.sortedListByHitCount_DESC = [...list];
						break;
					}
					case NameOfOrderStandard.registeredAt: {
						sortedList.sortedListByRegisteredAt_DESC = [...list];
						break;
					}
					default:
						break;
				}
			}
			return { ...state, sortedList };
		}

		case actionTypes.SET_PROCESSED_LIST: {
			const { orderStandard, isAsc } = action.payload;
			const { sortedList } = state;
			let temp = [];

			if (isAsc) {
				switch (orderStandard) {
					case NameOfOrderStandard.createdAt: {
						temp = [...sortedList.sortedListByCreateAt_ASC];
						break;
					}
					case NameOfOrderStandard.hitCount: {
						temp = [...sortedList.sortedListByHitCount_ASC];
						break;
					}
					case NameOfOrderStandard.registeredAt: {
						temp = [...sortedList.sortedListByRegisteredAt_ASC];
						break;
					}
					default:
						break;
				}
			} else {
				switch (orderStandard) {
					case NameOfOrderStandard.createdAt: {
						temp = [...sortedList.sortedListByCreateAt_DESC];
						break;
					}
					case NameOfOrderStandard.hitCount: {
						temp = [...sortedList.sortedListByHitCount_DESC];
						break;
					}
					case NameOfOrderStandard.registeredAt: {
						temp = [...sortedList.sortedListByRegisteredAt_DESC];
						break;
					}
					default:
						break;
				}
			}
			return { ...state, processedList: [...temp], length_of_processedList: temp.length };
		}
		default:
			return { ...state };
	}
}
