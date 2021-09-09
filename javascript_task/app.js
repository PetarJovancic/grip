// Import data from json file
const records = require('./records.json');

// Function that returns all indexes of element with the same occurences
function getAllIndexes(arr, val) {
	var indexes = [],
		i = -1;
	while ((i = arr.indexOf(val, i + 1)) != -1) {
		indexes.push(i);
	}
	return indexes;
}

// Function that returns all user ids with specific action whithin given timeframe
const getUsers = function getUsers(records, action, startTime, endTime) {
	var actIndex = getAllIndexes(records.action, action);
	let dateIndex = [];
	let userIds = [];
	records.dateActioned.forEach(element => {
		if (element >= startTime && element < endTime) {
			const index = records.dateActioned.indexOf(element);
			dateIndex.push(index);
		}
	});
	const userInd = actIndex.filter(value => dateIndex.includes(value));
	userInd.forEach(element => {
		userIds.push(records.userID[element]);
	});
	return userIds;
};

// Function that returns unique playback time in seconds
const getPlaybackTime = function (userID, records) {
	let startPlayback = records.userID.indexOf(userID);
	let endPlayback = records.userID.lastIndexOf(userID);
	let uniquePlayback =
		records.dateActioned[endPlayback] - records.dateActioned[startPlayback];
	return uniquePlayback;
};

// Printing funtions result
console.log(getUsers(records, 'start', 700, 900));
console.log(getPlaybackTime(1, records));

// Export functions for unit testing
exports.getPlaybackTime = getPlaybackTime;
exports.getUsers = getUsers;
