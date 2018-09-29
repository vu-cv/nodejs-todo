var configValue = require('./config');

module.exports = {
	getDbConnectString: function () {
		return `mongodb://${configValue.username}:${configValue.password}@ds161539.mlab.com:61539/node-todos`;
	}
}