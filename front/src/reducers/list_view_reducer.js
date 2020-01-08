import * as actionTypes from 'actionTypes';

const initialState = {
	isAsc: true,
	orderStandard: 'index',
	preProcessedList: [],
};

export default function list_view(state = initialState, action) {
	switch (action.type) {
		case actionTypes.LIST_ORDER_CHANGER: {
			const { orderStandard } = action.payload;
			//if orderStandard changed then set as ASC order
			if (orderStandard !== state.orderStandard) {
				state.isAsc = true;
				// otherwise set isAsc reverse
			} else {
				state.isAsc = !state.isAsc;
			}
			return { ...state, isAsc: state.isAsc, orderStandard };
		}
		case actionTypes.SET_PRE_PROCESSED_LIST: {
			const { preProcessedList } = action.payload;
			return { ...state, preProcessedList };
		}
		default:
			return { ...state };
	}
}
