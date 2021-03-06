const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CountrySchema = new Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, { collection: "Country" });

module.exports = mongoose.model('Country', CountrySchema);
