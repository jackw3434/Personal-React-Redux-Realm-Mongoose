let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CharacterSchema = new Schema({
    name: { type: String, required: true },
    job: { type: String, required: true }   
});

module.exports = mongoose.model('Character', CharacterSchema);