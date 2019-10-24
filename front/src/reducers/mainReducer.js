import actionTypes from '../actionTypes';

const initialState = { mainTest: 999 };

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.DUMMY: {
            const { payload } = action;
            return ({ ...state, mainTest: payload, })
        }
        default:
            return state
    }
}
