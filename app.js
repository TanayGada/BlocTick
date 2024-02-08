require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors')
const eventsRouter = require('./routes/events')
const customersRouter = require('./routes/customers')
const userRoutes = require('./routes/user')
const app = express()
require('./auth');


app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
)


const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT

mongoose.connect(MONGO_URI)
  .then(() => {

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`)
    })
    
  })
  .catch((err) => {
    console.log(err);
  })



app.use(morgan('tiny'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/customers', customersRouter)

app.use('/events', eventsRouter)
app.use('/user', userRoutes)


// function isAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//       return next();
//     }
//     res.redirect('/failed');
// }

// // Setting up express-session middleware
// app.use(session({
//   secret: 'ANISH',
//   resave: true,
//   saveUninitialized: true
// }));

// // Initializing Passport and restoring authentication state, if any, from the session
// app.use(passport.initialize());
// app.use(passport.session());

// app.get('/auth/google',
//   passport.authenticate('google', { scope: [ 'email', 'profile' ] }
// ));

// app.get( '/auth/google/callback',
//   passport.authenticate( 'google', {
//     successRedirect: '/passed',
//     failureRedirect: '/failed'
//   })
// );
  
// app.get('/logout', (req, res) => {
//     req.logout(err => {
//         if (err) {
//             return res.status(500).json({ error: 'Error during logout' });
//         }
//         req.session.destroy();
//         res.send('Goodbye!');
//     });
// });

// app.get('/', (req, res) => {
// //   res.status(200).json({ success: true, data: {} });
//     // res.render("<a href='auth/google'>")
       
// });

// app.get('/failed', (req, res) => {
//   res.status(401).json({ success: true, data: "You are not authenticated" });
// });

// app.post('/', (req, res) => {
//   // res.status(401).json({ success: true, data: 'You are not authenticated' })
//   console.log(req.body)
// })

// app.get('/passed', (req, res) => {
//   res.status(200).json({ success: true, data: "You are authenticated" });
// });

// app.use('/customers/*', isAuthenticated);

