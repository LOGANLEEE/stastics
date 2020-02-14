import * as actionTypes from 'actionTypes';

const initialState = {
	isAsc: false,
	orderStandard: 'createdAt',
};

export default function list_view(state = initialState, action) {
	switch (action.type) {
		case actionTypes.LIST_ORDER_CHANGER: {
			const { orderStandard } = action.payload;

			// If orederStandard didn't changed then reverse order.
			if (orderStandard !== state.orderStandard) {
				state.isAsc = false;
			} else {
				// Otherwise which mean is orderStandard has changed compare to prev.orderStandard
				// Thus set isAsc reverse
				state.isAsc = !state.isAsc;
			}
			return { ...state, isAsc: state.isAsc, orderStandard };
		}
		default:
			return { ...state };
	}
}
