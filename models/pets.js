const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const PetSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		tag: {
			type: String,
			required: false,
		},
	}
);

PetSchema.plugin(timestamps);
PetSchema.plugin(mongooseStringQuery);

const Pet = mongoose.model('Pet', PetSchema);
module.exports = Pet;  