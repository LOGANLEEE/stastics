function replaceAll(value, targetString, replaceString) {
	if (typeof value === 'string' && value !== '') {
		return value
			.split(targetString)
			.join(replaceString)
			.trim();
	} else {
		return value;
	}
}

module.exports = {
	replaceAll,
};
