const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {Events} = require('../models/models.js');

router.get('/', async (req, res) => {
    try {
        // Using Mongoose to retrieve all events
        const events = await Events.find();

        // Returning the list of events
        res.status(200).json(events);
    }
    catch(err){
        console.error('Error fetching events:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/:eventId', async (req, res) => {
    try {
        const eventId = req.params.eventId;

        if (eventId) {
            // Fetching events by specific eventId
            const event = await Events.findOne({ eventId });
            if(!event){
                return res.status(404).json({ error: 'Event not found with the specified eventId' });
            }
            return res.status(200).json(event);
        } else {
            // Fetching all events
            const events = await Events.find();
            return res.json(events);
        }
    }
    catch(err){
        console.error('Error fetching events:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/upcoming/:eventId', async (req, res) => {
    try {
        const eventId = req.params.eventId;

        if (eventId) {
            // Fetching events by specific eventId
            const event = await Events.findOne({ eventId });

            if (!event) {
                return res.status(404).json({ error: 'Event not found with the specified eventId' });
            }

            const currentDateTime = new Date();

            // Check if the eventDate has not passed
            if (event.eventDate > currentDateTime) {
                // Event is upcoming, include it in the response
                return res.status(200).json(event);
            } else {
                // Event has already passed, send a different response
                return res.status(400).json({ error: 'Event has already taken place' });
            }
        } else {
            // Fetching all events
            const events = await Events.find();

            // Filter events based on whether their eventDate has not passed
            const upcomingEvents = events.filter(event => event.eventDate > new Date());

            return res.json(upcomingEvents);
        }
    } catch (err) {
        console.error('Error fetching events:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/past/:eventId', async (req, res) => {
    try {
        const eventId = req.params.eventId;

        if (eventId) {
            // Fetching events by specific eventId
            const event = await Events.findOne({ eventId });

            if (!event) {
                return res.status(404).json({ error: 'Event not found with the specified eventId' });
            }

            const currentDateTime = new Date();

            // Check if the eventDate has already passed
            if (event.eventDate <= currentDateTime) {
                // Event is in the past, include it in the response
                return res.status(200).json(event);
            } else {
                // Event is still upcoming, send a different response
                return res.status(400).json({ error: 'Event is not yet in the past' });
            }
        } else {
            // Fetching all events
            const events = await Events.find();

            // Filter events based on whether their eventDate has already passed
            const pastEvents = events.filter(event => event.eventDate <= new Date());

            return res.json(pastEvents);
        }
    } catch (err) {
        console.error('Error fetching events:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

let eventIdCounter = 1;

router.post('/', async (req, res) => {
    try {
        const eventData = req.body;

        // Validating the required fields
        const { eventName, eventOrganizerEmailId, eventDate, eventDuration, eventLocation, eventTicketsType, eventTicketsCount, eventTicketsPrice } = eventData;

        // Incrementing the counter and use it as eventId
        const eventId = eventIdCounter++;

        // Creating a new event instance
        const newEvent = new Events({
            eventName,
            eventId,
            eventOrganizerEmailId,
            eventDate: new Date(eventDate),
            eventDuration,
            eventLocation,
            eventTicketsType,
            eventTicketsCount,
            eventTicketsPrice
        });

        // Saving the new event to the database
        await newEvent.save();

        // Returning the newly created event
        res.status(201).json(newEvent);
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/:eventId', async (req, res) => {
    try {
        const organizerEmail = req.headers['organizer-email'];
        const eventId = req.params.eventId;
        const eventData = req.body;

        // Validating the input
        if (!eventId || !organizerEmail) {
            return res.status(400).json({ error: 'Incomplete data. EventId and organizer email are required.' });
        }

        // Finding the event by eventId and organizerEmail
        const existingEvent = await Events.findOne({ eventId, eventOrganizerEmailId: organizerEmail });

        // If the event doesn't exist or the organizer doesn't match, return an error
        if (!existingEvent) {
            return res.status(404).json({ error: 'Event not found or unauthorized' });
        }

        // Checking if the event organizer matches the provided email
        if (existingEvent.eventOrganizerEmailId !== organizerEmail) {
            return res.status(403).json({ error: 'Unauthorized access. You are not the organizer of this event.' });
        }

        // Replacing the entire event with the new data
        Object.assign(existingEvent, eventData);

        // Saving the updated event
        await existingEvent.save();

        // Returning the updated event details
        res.json(existingEvent);
    } catch (error) {
        console.error('Error updating event:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete('/:eventId', async (req, res) => {
    try {
        const organizerEmail = req.headers['organizer-email'];
        const eventId = req.params.eventId;

        // Validating the input
        if (!eventId || !organizerEmail) {
            return res.status(400).json({ error: 'Incomplete data. EventId and organizer email are required.' });
        }

        // Finding the event by eventId and organizerEmail
        const existingEvent = await Events.findOne({ eventId, eventOrganizerEmailId: organizerEmail });

        // If the event doesn't exist or the organizer doesn't match, return an error
        if (!existingEvent) {
            return res.status(404).json({ error: 'Event not found or unauthorized' });
        }

        // Deleting the event
        const deletedEvent = await Events.findOneAndDelete({ eventId, eventOrganizerEmailId: organizerEmail });

        // Returning the deleted event details
        res.json(deletedEvent);
    } catch (error) {
        console.error('Error deleting event:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;