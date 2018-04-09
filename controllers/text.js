const textService = require('../services/text');

function getTexts(req, res){
	textService.getAll()
    .then(data => res.send(data));
};

function getText(req, res){
	textService.getById(req.params.id)
    .then(data => res.send(data))
    .catch(err => console.log(err));
}

function addText(req, res){
    textService.add({
        user_id: req.user.id,
        title: req.body.title,
        body: req.body.body,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    })
    .then(data => res.send(data));
};

function nearestTexts(req, res) {
    textService.findNearestTexts(req.params.lat, req.params.lon)
    .then(data => res.send(data));
}

module.exports = {
	getTexts,
	getText,
    addText,
    nearestTexts
}
