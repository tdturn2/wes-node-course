const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { catchErrors } = require('../handlers/errorHandlers');

// Do work here
router.get('/', (req, res) => {
  res.send('Hey! It works!');
});


router.get('/dashboard', eventController.getEvents);

router.get('/add', catchErrors(eventController.addEvent));
router.post('/add', catchErrors(eventController.createEvent));

// Works okay without error checking
//router.get('/add', eventController.addEvent);
//router.post('/add', eventController.createEvent);



module.exports = router;
