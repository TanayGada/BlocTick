const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
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
    eventDate : {
        type : Date,
        requried : true
    },
    eventDuration :{
        type : Date,
        required : true
    },
    eventLocation : {
        type : String,
        required : true
    },
    eventTicketsType : {
        type : [String],
        required : true
    },
    eventTicketsCount : {
        type : [Number],
        reuired : true
    },
    eventTicketsPrice : {
        type : [Number],
        required : true
    }
});

const Events = new mongoose.model("event",eventSchema);

//For Customers
const showTicket = new mongoose.Schema({
    ticketType : {
        type : [String],
        required : true
    },
    ticketCount : {
        type : [Number],
        required : true
    }
},{ _id: false });

const ticketSchema = new mongoose.Schema({
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

const customersSchema = mongoose.Schema({
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