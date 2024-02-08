const { Customers } = require('../models/models.js');

// Controller for handling GET requests
const getCustomerByEmail = async (req, res) => {
    try {
        const emailId = req.params.id;
        console.log(`The request is made by ${emailId}`);
        
        if (!emailId) {
            return res.status(400).json({ error: 'emailId parameter is required' });
        }
  
        const customers = await Customers.find({ emailId });
  
        res.json(customers);
    } catch(error){
        console.error('Error querying customers:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Controller for handling POST requests
const createOrUpdateCustomer = async (req, res) => {
    try {
        const emailId = req.params.id;
        console.log(`The request is made by ${emailId}`);
        
        if (!emailId) {
            return res.status(400).json({ error: 'emailId parameter is required' });
        }

        let current = await Customers.findOne({ emailId });

        if (!current) {
            current = new Customers({
                name: req.body.name,
                emailId: emailId,
                ownedTickets: []
            });
        }

        const tickets = req.body.ownedTickets;
        for (const ticketData of tickets) {
            const { showsId, showsTicket } = ticketData;

            if (!showsId) {
                return res.status(400).json({ error: 'showsId is required for each ticket' });
            }

            current.ownedTickets.push({
                showsId,
                showsTicket
            });
        }

        await current.save();

        res.status(200).json(current);
    } catch (error) {
        console.error('Error fetching or updating customer:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Controller for handling DELETE requests
const deleteCustomer = async (req, res) => {
    try {
        const emailId = req.params.id;
        console.log(`The request is made by ${emailId}`);
        
        if (!emailId) {
            return res.status(400).json({ error: 'emailId parameter is required' });
        }

        let current = await Customers.findOne({ emailId });

        if (!current) {
            return res.status(404).json({ error: 'Customer not found' });
        }

        const showsIdToDelete = req.headers['shows-id'];

        if (showsIdToDelete) {
            current.ownedTickets = current.ownedTickets.filter(ticket => ticket.showsId !== showsIdToDelete);
        } else {
            current.ownedTickets = [];
        }

        await current.save();

        res.status(200).json(current);
    } catch(error){
        console.error('Error deleting customer:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getCustomerByEmail,
    createOrUpdateCustomer,
    deleteCustomer
};
