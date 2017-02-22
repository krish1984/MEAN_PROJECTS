var log4js = require('log4js');
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('./cheese.log'), 'cheese');
var logger = log4js.getLogger('cheese');
logger.setLevel('DEBUG');

/*logger.debug('Got cheese.');
logger.info('Cheese is Gouda.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');*/

exports.debug = function (message) {
	logger.debug('DEBUG : '+ message);
};

exports.error = function (message) {
	logger.debug('ERROR : '+ message);
};

//we have other way around: http://ridewithnode.blogspot.in/p/logging-framework-for-node-application.html