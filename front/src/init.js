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

const address = { getTempList: 'getTempList', alive: 'alive', getTargetSiteList: 'getTargetSiteList' };
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

function GET_TEMP_POSTS() {
	return axios.post(url + address.getTempList, '', config).then(res => {
		store.dispatch(actions.GET_TEMP_POSTS(res.data));
		info('=== 1. DONE GET_TEMP_POSTS');
		inPutLogger(res.data);
		return true;
	});
}

function GET_TARGET_SITE_LIST() {
	return axios.post(url + address.getTargetSiteList, '', config).then(res => {
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
			GET_TEMP_POSTS();
			GET_TARGET_SITE_LIST();
			return true;
		} else {
			info('Server is in sleep :(');
			return false;
		}
	});
}
