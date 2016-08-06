const user = require('./user');
const objective = require('./objective');
const key = require('./key');
const comment = require('./comment');
const category = require('./category');
const plan = require('./plan');

module.exports = function(app){
	app.use('/api/user', user);
	app.use('/api/objective', objective);
	app.use('/api/key', key);
	app.use('/api/comment', comment);
	app.use('/api/category', category);
	app.use('/api/plan', plan);
};