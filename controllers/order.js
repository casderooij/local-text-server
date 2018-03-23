const orderService = require('../services/order');

function getOrders(req, res){
	orderService.getAll()
	.then(data => res.send(data));
};

function getOrder(req, res){
	orderService.getById(req.params.id)
    .then(data => res.send(data))
    .catch(err => console.log(err));
}

function addOrder(req, res){
    orderService.add({
         title: req.body.title,
         user_id: req.user.id
    })
    .then(data => res.send(data));
};

module.exports = {
	getOrders,
	getOrder,
	addOrder
}
