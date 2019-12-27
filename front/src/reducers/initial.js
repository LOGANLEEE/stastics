import * as actionTypes from 'actionTypes';

const initialState = {
	tempPosts: [],
};

export default function initial(state = initialState, action) {
	switch (action.type) {
		case actionTypes.GET_TEMP_POSTS: {
			const { list } = action.payload;
			return { ...state, tempPosts: [...list] };
		}
		default:
			return { ...state };
	}
}
