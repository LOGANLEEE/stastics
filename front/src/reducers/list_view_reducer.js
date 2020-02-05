import * as actionTypes from 'actionTypes';

const initialState = {
	isAsc: true,
	orderStandard: 'createdAt',
};

export default function list_view(state = initialState, action) {
	switch (action.type) {
		case actionTypes.LIST_ORDER_CHANGER: {
			const { orderStandard } = action.payload;
			//if orderStandard changed then set as ASC order
			if (orderStandard !== state.orderStandard) {
				state.isAsc = false;
				// otherwise set isAsc reverse
			} else {
				state.isAsc = !state.isAsc;
			}
			return { ...state, isAsc: state.isAsc, orderStandard };
		}
		default:
			return { ...state };
	}
}
