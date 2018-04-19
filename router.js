const authController = require('./controllers/auth');
const textController = require('./controllers/text');
const userController = require('./controllers/user');

const authMiddleware = require('./middlewares/auth');

module.exports.set = app => {
    app.post('/login', authController.login);
    app.post('/register', authController.register);

    app.get('/texts/:id', textController.getText);
    app.get('/texts', textController.getTexts);
    app.post('/texts', authMiddleware.checkAuth, textController.postText);
    // app.put('/texts/:id', authMiddleware.checkAuth, textController.putText);
    app.put('/texts/:id', textController.putText);
    // app.delete('/texts/:id', authMiddleware.checkAuth, textController.deleteText);
    app.delete('/texts/:id', textController.deleteText);
    app.get('/nearest-texts/:lat/:lon', textController.getNearestTexts);

    app.get('/users', authMiddleware.checkAuth, userController.getAllUsers);
    // app.get('/users/:id', authMiddleware.checkAuth, userController.getUser);
    app.get('/users/:id', userController.getUser);
    app.get('/users/texts/:id', authMiddleware.checkAuth, textController.getUserTexts);

    app.get('/', (req, res) => res.send('Hello World!'));
}