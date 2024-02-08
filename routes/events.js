const express = require('express');
const router = express.Router();

const { getAllEvents,
    getEventById,
    getUpcomingEvents,
    getPastEvents,
    postEvents,
    updateEventById,
    deleteEventById
    
    
} = require('../Controllers/eventsController');

const requireAuth = require('../middleware/requireAuth');

const { get } = require('http')

router.use(requireAuth); //require auth for all routes below

router.get('/', getAllEvents);

router.get('/:eventId', getEventById);

router.get('/upcoming/:eventId', getUpcomingEvents);

router.get('/past/:eventId', getPastEvents);    

router.post('/', postEvents);

router.put('/:eventId', updateEventById);

router.delete('/:eventId', deleteEventById);

module.exports = router;