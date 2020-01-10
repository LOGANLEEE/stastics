import * as actionTypes from 'actionTypes';

const initialState = {
	tempPosts: [],
	targetSiteList: [],
	processedList: [],
};

export default function initial(state = initialState, action) {
	switch (action.type) {
		case actionTypes.GET_TEMP_POSTS: {
			const { list } = action.payload;
			return { ...state, tempPosts: [...list], processedList: [...list] };
		}
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
		case actionTypes.SET_PROCESSED_LIST: {
			const { processedList } = action.payload;
			return { ...state, processedList };
		}
		default:
			return { ...state };
	}
}
