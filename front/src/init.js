import axios from 'axios';
import store from 'store';
import * as actions from 'actions';

const address = { init: 'init', alive: 'alive' };
const url = 'https://localhost:4001/';
const config = {
	headers: { auth: 1743511 },
};

function isServerAlive() {
	return axios.get(url + address.alive).then(res => {
		if (res.status === 200) {
			return true;
		} else {
			return false;
		}
	});
}

function loading() {
	isServerAlive().then(res => {
		if (res) {
			console.info('Server is Alive');
			axios.post(url + address.init, '', config).then(res => {
				store.dispatch(actions.GET_TEMP_POSTS(res.data));
				return true;
			});
		} else {
			console.info('Server is in sleep');
			return false;
		}
	});
}

export function start() {
	loading();
}
