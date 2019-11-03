import * as actionTypes from '../actionTypes';

const initialState = { mainTest: 999, listTargetCount: 10 };

export default function mainReducer(state = initialState, action) {
    switch (action.type) {

        case actionTypes.DUMMY: {
            const { payload } = action;
            return ({ ...state, mainTest: payload, });
        };

        case actionTypes.LIST_CLICK_COUNTER: {
            const { count } = action.payload;
            return ({ ...state, listTargetCount: count + 1 });
        };

        default:
            return state;
    }
}
