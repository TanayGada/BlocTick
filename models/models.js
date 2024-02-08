const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventName : {
        type : String,
        required : true
    },
    eventId : {
        type : String,
        required : true
    },
    eventOrganizerEmailId : {
        type : String,
        required : true
    },
    eventStartDate : {
        type : Date,
        required : true
    },
    eventEndDate : {
        type : Date,
        required : true
    },
    eventDuration :{
        type : Number,
        required : true
    },
    eventLocation : {
        type : String,
        required : true
    },
    eventTicketsCount : {
        type : [Number],
        required : true
    },
    eventTicketsPrice : {
        type : [Number],
        required : true
    }
},{timestamps : true});  //timestamps : true will automatically add createdAt and updatedAt fields to the schema

const Events = new mongoose.model("event",eventSchema);

//For Customers
const showTicket = new Schema({
    ticketCount : {
        type : [Number],
        required : true
    }
},{ _id: false });

const ticketSchema = new Schema({
    showsName : {
        type : String
    },
    showsId : {
        type : String,
        required : true
    },
    showsTicket : {
        type: showTicket
    },
},{ _id: false });

const customersSchema = Schema({
    name : {
        type : String,
        required : true
    },
    emailId : {
        type : String,
        required : true
    },
    ownedTickets : {
        type : [ticketSchema]
    }
});

const Customers = new mongoose.model("customer",customersSchema);

module.exports = {Customers,Events};