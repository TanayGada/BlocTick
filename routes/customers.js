const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {Customers} = require('../models/models.js');

router.get('/:id', async (req, res) => {
    try {
        // Getting the emailId from the request query parameters
        const emailId = req.params.id;
        console.log(`The request is made by ${emailId}`);
        
        // Checking if emailId is provided in the query
        if (!emailId) {
            return res.status(400).json({ error: 'emailId parameter is required' });
        }
  
        // Using Mongoose find to filter customers based on emailId
        const customers = await Customers.find({ emailId });
  
        // Returning the result
        res.json(customers);
    } 
    catch(error){
        console.error('Error querying customers:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/:id', async (req, res) => {
    try {
        // Getting the customer ID from the request parameters
        const emailId = req.params.id;
        console.log(`The request is made by ${emailId}`);
        
        // Checking if emailId is provided in the query
        if (!emailId) {
            return res.status(400).json({ error: 'emailId parameter is required' });
        }

        // Using Mongoose findOne to find a single customer based on emailId
        let current = await Customers.findOne({ emailId });

        // If the customer is not found, creating a new one
        if (!current) {
            // Creating a new customer
            current = new Customers({
                name: req.body.name,
                emailId: emailId,
                ownedTickets: []
            });
        }

        // Iterating over each owned ticket in the request and add it to the customer
        const tickets = req.body.ownedTickets;
        for (const ticketData of tickets) {
            const { showsId, showsTicket } = ticketData;

            // Ensuring showsId is provided
            if (!showsId) {
                return res.status(400).json({ error: 'showsId is required for each ticket' });
            }

            // Adding the ticket to the ownedTickets array
            current.ownedTickets.push({
                showsId,
                showsTicket
            });
        }

        // Saving the updated or newly created customer
        await current.save();

        // Returning the updated or newly created customer data
        res.status(200).json(current);
    } catch (error) {
        console.error('Error fetching or updating customer:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        // Getting the customer ID from the request parameters
        const emailId = req.params.id;
        console.log(`The request is made by ${emailId}`);
        
        // Checking if emailId is provided in the query
        if (!emailId) {
            return res.status(400).json({ error: 'emailId parameter is required' });
        }

        // Using Mongoose findOne to find a single customer based on emailId
        let current = await Customers.findOne({ emailId });

        // If the customer is not found, return an error
        if (!current) {
            return res.status(404).json({ error: 'Customer not found' });
        }

        // Checking if showsId is provided in the headers
        const showsIdToDelete = req.headers['shows-id'];

        if (showsIdToDelete) {
            // If showsId is provided, remove the matching showsId from ownedTickets
            current.ownedTickets = current.ownedTickets.filter(ticket => ticket.showsId !== showsIdToDelete);
        } else {
            // If showsId is not provided, delete the whole customer ownedTickets
            current.ownedTickets = [];
        }

        // Saving the updated customer
        await current.save();

        // Returning the updated customer data
        res.status(200).json(current);
    } 
    catch(error){
        console.error('Error deleting customer:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;