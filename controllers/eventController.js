const mongoose = require('mongoose');
const Event = mongoose.model('Event');

exports.eventPage = (req, res) => {
	res.render('event');
};



exports.addEvent = (req, res) => {
	res.render( 'editEvent', {title: 'Add Event'} );	
	//res.send('it works');
};


exports.createEvent = async(req, res) => {
	//res.json(req.body);
 const event = new Event(req.body);
		await event.save();
		console.log('It worked');
		res.redirect('/add');
};

exports.getEvents = async(req, res) => {
	const events = await Event.find();
	res.render('dashboard', {title:'Dashboard', events});
	
};
