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

function getNearestTexts(req, res) {
    textService.findNearestTexts(req.params.lat, req.params.lon)
    .then(data => res.send(data));
}

function getNearestThreeTexts(req, res) {
    textService.findNearestThreeTexts(req.params.lat, req.params.lon)
    .then(data => res.send(data));
}

function postText(req, res){
    textService.addText({
        user_id: req.user.id,
        title: req.body.title,
        body: req.body.body,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    })
    .then(data => res.send(data))
    .catch(err => console.log(err));
}

function putText(req, res) {
    // const id = req.user.id;
    
    textService.getById(req.params.id)
    .then(data => {
        // if(id === data.user_id) {
            textService.updateText(req.params.id, {
                title: req.body.title,
                body: req.body.body,
                latitude: req.body.latitude,
                longitude: req.body.longitude
            })
            .then(data => res.send(data))
            .catch(err => console.log(err));
        // } else {
        //     res.send('This is not your text...');
        // }
    })
    .catch(err => console.log(err));
}

function deleteText(req, res) {
    // const id = req.user.id;
    
    textService.getById(req.params.id)
    .then(data => {
        // if(id === data.user_id) {
            textService.removeText(req.params.id)
            .then(data => res.json({'message': 'Text has been deleted.'}))
            .catch(err => console.log(err));
        // } else {
        //     res.send('This is not your text...');
        // }
    })
    .catch(err => console.log(err));
}

function getUserTexts(req, res) {
    userService.getUserAndTexts(req.params.id)
    .then(data => res.send(data))
    .catch(err => console.log(err));
}

module.exports = {
	getTexts,
	getText,
    getNearestTexts,
    getNearestThreeTexts,
    postText,
    putText,
    deleteText,
    getUserTexts
}
