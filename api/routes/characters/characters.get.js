let CharacterDefinition = require('../../models/character');

module.exports = function (router) {
    router.route('/characters').get(function (req, res) {

        CharacterDefinition.find(function (err, characters) {

            if (err || !characters || characters.length === 0) {
                return res.status(400).send({ errorCode: 'no_characters', errorMessage: 'No Characters' })
            }

            return res.json(characters);
        })
    });
}