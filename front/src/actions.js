import actionTypes from './actionTypes'

export function dummy(value) {
    return ({
        type: actionTypes.DUMMY,
        payload: value,
    });
};

export default 'import actions properly';