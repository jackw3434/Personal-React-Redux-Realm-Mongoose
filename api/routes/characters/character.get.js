let CharacterDefinition = require('../../models/character');

module.exports = function (router) {
    router.route('/characters/:id').get(function (req, res) {

        CharacterDefinition.findById(req.params.id, function (err, characters) {

            if (err || !characters || characters.length === 0) {
                res.status(400).send({ errorCode: 'invalid_id', errorMessage: 'No matching Character for id ' + req.params.id })
                return;
            }

            res.json(characters);
        })
    });
}