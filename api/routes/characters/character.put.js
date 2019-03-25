let CharacterDefinition = require('../../models/character');

module.exports = function (router) {
    router.route('/characters/:id').put(function (req, res) {

        CharacterDefinition.findById(req.params.id, function (err, characters) {

            if (err || !characters || characters.length === 0) {
                res.status(400).send({ errorCode: 'invalid_id', errorMessage: 'No matching Characters for id ' + req.params.id })
                return;
            }

            characters.set(req.body);

            characters.save(function (err) {

                if (err) {
                    console.log(err);
                    res.status(500).send({ errorCode: 'save_failed', errorMessage: 'Unable to Save Character' })
                    return;
                }

                res.json({ message: 'Character Updated', characters });

            });
        });
    });
}