const { info } = console;

function replaceAll(value, targetString, replaceString) {
	if ((value !== undefined || targetString !== undefined, replaceString !== undefined)) {
		if (typeof value === 'string' && value !== '') {
			return value
				.split(targetString)
				.join(replaceString)
				.trim();
		}
	} else {
		info('[ ERROR ] util > replaceAll has recieved not sufficent parameters');
	}
	return value;
}

module.exports = {
	replaceAll,
};
