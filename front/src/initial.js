import axios from 'axios';
import store from 'store';
import * as actions from 'actions';

const { info } = console;

export function outPutLogger(data) {
	return console.info('[£OUTPUT_LOG] : ', data);
}

export function inPutLogger(data) {
	return console.info('[#INPUT_LOG] : ', data);
}

const address = {
	getTempList: 'getTempList',
	alive: 'alive',
	getTargetSiteList: 'getTargetSiteList',
};
const url = 'https://localhost:4001/';
const config = {
	headers: { auth: 1743511 },
};

export async function isServerAlive() {
	return await axios
		.get(url + address.alive)
		.then(res => {
			if (res.status === 200) {
				return true;
			} else {
				return false;
			}
		})
		.catch(err => {
			outPutLogger(err);
			return false;
		});
}

export async function GET_PREPROCESSED_LIST() {
	return await axios.post(url + address.getTempList, '', config).then(res => {
		store.dispatch(actions.GET_PREPROCESSED_LIST(res.data));
		info('=== 1. DONE GET_TEMP_POSTS');
		inPutLogger(res.data);
		return true;
	});
}

export async function GET_TARGET_SITE_LIST() {
	return await axios
		.post(url + address.getTargetSiteList, '', config)
		.then(res => {
			store.dispatch(actions.GET_TARGET_SITE_LIST(res.data));
			info('=== 2. DONE GET_TARGET_SITE_LIST');
			inPutLogger(res.data);
			return true;
		});
}

export async function loading() {
	return await isServerAlive().then(res => {
		if (res) {
			inPutLogger('Server is Alive');
			GET_PREPROCESSED_LIST();
			GET_TARGET_SITE_LIST();
			return true;
		} else {
			setTimeout(() => {
				info('Server is in Danger! :(');
				loading();
			}, 5000);
			return false;
		}
	});
}
