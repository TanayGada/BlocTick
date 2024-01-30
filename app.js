const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
require('./auth');

mongoose.connect("mongodb://localhost:27017/BlocTik")
.then(() => {
    console.log("The local database has started");
})
.catch((err) => {
    console.log(err);
});

const PORT = 5000;
const app = express();

app.use(morgan('tiny'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/failed');
}

// Setting up express-session middleware
app.use(session({
  secret: 'ANISH',
  resave: true,
  saveUninitialized: true
}));

// Initializing Passport and restoring authentication state, if any, from the session
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
  passport.authenticate( 'google', {
    successRedirect: '/passed',
    failureRedirect: '/failed'
  })
);
  
app.get('/logout', (req, res) => {
    req.logout(err => {
        if (err) {
            return res.status(500).json({ error: 'Error during logout' });
        }
        req.session.destroy();
        res.send('Goodbye!');
    });
});

app.get('/', (req, res) => {
//   res.status(200).json({ success: true, data: {} });
    // res.render("<a href='auth/google'>")
    res.redirect('/auth/google');      
});

app.get('/failed', (req, res) => {
  res.status(401).json({ success: true, data: "You are not authenticated" });
});

app.get('/passed', (req, res) => {
  res.status(200).json({ success: true, data: "You are authenticated" });
});

app.use('/customers/*', isAuthenticated);
const customersRouter = require('./routes/customers');
app.use('/customers', customersRouter);

const eventsRouter = require('./routes/events');
app.use('/events', eventsRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});