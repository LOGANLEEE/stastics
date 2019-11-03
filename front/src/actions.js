import * as actionTypes from './actionTypes'

export function Dummy(value) {
    return ({
        type: actionTypes.DUMMY,
        payload: value,
    });
};

export const ListClickCounter = (count) => ({
    type: actionTypes.LIST_CLICK_COUNTER,
    payload: { count },
});

export default 'import actions properly';