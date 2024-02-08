const express = require('express');
const router = express.Router();
const { getCustomerByEmail, createOrUpdateCustomer, deleteCustomer } = require('../controllers/customersController');

router.get('/:id', getCustomerByEmail);
router.post('/:id', createOrUpdateCustomer);
router.delete('/:id', deleteCustomer);

module.exports = router;