var log4js = require('log4js');
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('./cheese.log'), 'cheese');
var logger = log4js.getLogger('cheese');
logger.setLevel('DEBUG');

logger.debug('Got cheese.');
logger.info('Cheese is Gouda.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');

exports.trace = function (message) {
	console.log("AAAAAAAAAAA " + message);
	logger.debug('Got cheese.');
};

//we have other way around: http://ridewithnode.blogspot.in/p/logging-framework-for-node-application.html