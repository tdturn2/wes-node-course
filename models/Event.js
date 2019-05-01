const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const eventSchema = new mongoose.Schema({
	title: {
		type: String,
		trim: true,
		required: 'Title required'
	},
	description: String,
	location: String,
	start: Date,
	end: Date,
	quantity: Number,
	travelID: String,

	}
);


module.exports = mongoose.model('Event', eventSchema);

