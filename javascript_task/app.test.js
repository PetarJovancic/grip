const { getUsers } = require('./app');
const { getPlaybackTime } = require('./app');
const records = require('./records.json');

// Test get user ID for the action: "Start" and timeframe: 700-900
test('should output user ID [3]', () => {
	const userID = getUsers(records, 'start', 700, 900);
	expect(userID).toStrictEqual([3]);
});

// Test get user ID for the action: "Start" and timeframe: 100-200
test('should output user ID [1]', () => {
	const userID = getUsers(records, 'start', 100, 200);
	expect(userID).toStrictEqual([1]);
});

// Test get user ID for the action: "Stop" and timeframe: 400-900
test('should output user ID [1, 2]', () => {
	const userID = getUsers(records, 'stop', 400, 900);
	expect(userID).toStrictEqual([1, 2]);
});

// Test get user ID for the action: "start" and timeframe: 100-900
test('should output user ID [1, 2, 1, 3]', () => {
	const userID = getUsers(records, 'start', 100, 900);
	expect(userID).toStrictEqual([1, 2, 1, 3]);
});

// Test get unique playback time for user ID: 1
test('should output 310', () => {
	const playbackTime = getPlaybackTime(1, records);
	expect(playbackTime).toStrictEqual(310);
});

// Test get unique playback time for user ID: 2
test('should output 290', () => {
	const playbackTime = getPlaybackTime(2, records);
	expect(playbackTime).toStrictEqual(290);
});

// Test get unique playback time for user ID: 3
test('should output 0', () => {
	const playbackTime = getPlaybackTime(3, records);
	expect(playbackTime).toStrictEqual(0);
});
