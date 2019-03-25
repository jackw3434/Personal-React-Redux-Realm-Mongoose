let CharacterDefinition = require('../../models/character');

module.exports = function (router) {
    router.route('/characters/:id').delete( function (req, res) {        

        CharacterDefinition.deleteOne({ _id: req.params.id }, function (err, result) {

            if (err || result.deletedCount === 0) {
                res.status(400).send({ errorCode: 'invalid_id', errorMessage: 'No matching Character for id ' + req.params.id })
                return;
            }

            res.json({ message: 'Character Deleted' });
        })
    });
}