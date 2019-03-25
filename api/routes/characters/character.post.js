let CharacterDefinition = require('../../models/character');

module.exports = function (router) {
    router.route('/characters').post(function (req, res) {

        var character = new CharacterDefinition(req.body);

        character.save(function (err) {

            if (err) {

                res.status(500).send({ errorCode: 'save_failed', errorMessage: 'Unable to save Character.' });
                return;
            }

            res.json({ message: 'Character ' + character.name + ' Created' });
        });
    });
}