module.exports = function(app){
    var musicians = require('../controllers/userController');
    app.get('/index', musicians.hello);
    app.get('/users', musicians.findAll);
    app.get('/users/:id', musicians.findById);
    app.post('/users/save', musicians.add);
}

