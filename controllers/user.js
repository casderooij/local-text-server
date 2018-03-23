const userService = require('../services/user');

function getUser(req, res){
	userService.getUserById(req.params.id)
    .then(data => res.send(data))
    .catch(err => console.log(err));
}

function getAllUsers(req, res) {
    userService.getAll()
    .then(data => res.send(data));
}

module.exports = {
    getUser,
    getAllUsers
}
