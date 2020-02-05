import * as actionTypes from 'actionTypes';

const initialState = {
	tempPosts: [],
	targetSiteList: [],
};

export default function initial(state = initialState, action) {
	switch (action.type) {
		case actionTypes.GET_TEMP_POSTS: {
			const { list } = action.payload;
			return { ...state, tempPosts: [...list] };
		}
		case actionTypes.GET_TARGET_SITE_LIST: {
			const { list } = action.payload;
			return { ...state, targetSiteList: [...list] };
		}
		case actionTypes.OPEN_SITE_FROM_MIN_TO_MAX: {
			const { min, max } = action.payload;
			for (let i = min - 1; i < max; i++) {
				window.open(state.tempPosts[i].link, '_blank');
			}
			return { ...state };
		}
		default:
			return { ...state };
	}
}
