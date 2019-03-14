const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
// const path = require('path');
const stripe = require('stripe')('sk_test_qu5jGkkgEUNFek9qnT3S7nkN');
require('dotenv').config();

const userController = require('./controllers/userController');
const petController = require('./controllers/petController');

const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
}))

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Connected to the database')
})

//STRIPE
app.post('/api/donate', (req, res) => {
    let stripeToken = req.body.body;
    console.log('logging stripe token', stripeToken)
    stripe.charges.create({
        amount: req.body.amount,
        currency: 'usd',
        description: 'Donation',
        source: stripeToken
    }).then(response => {
        res.status(200).send(response)
    }).catch(err => console.log(err));
});


//Session Endpoints
app.get('/api/user-data', (req, res) => {
    console.log('user-data-session', req.session.user);
    res.json({ user: req.session.user });
});

app.post('/api/user-session', userController.updateUserSession);

//USER endpoints
app.post('/api/users', userController.createUser);
app.post('/login', userController.loginUser);
app.get('/api/users', userController.getUsers);
app.get('/api/users/:username', userController.getOneUser);
app.post('/logout', userController.logoutUser);
app.put('/api/users/:username', userController.editUser);
app.delete('/api/users/:username', userController.deleteUser);


function ensureLoggedIn(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.status(403).json({ message: 'You are not authorized' });
    }
}

app.get('/secure-data', ensureLoggedIn, (req, res) => {
    res.status(200);
});


//User/Pet Endpoints

//matches
app.get('/api/matches/:username', userController.getUserMatches);
app.post('/api/matches/:username', userController.addMatch);

//rejects
app.get('/api/rejects/:username', userController.getUserRejects);
app.post('/api/rejects/:username', userController.addReject);


//Pet Endpoints

//get all pets
app.get('/api/pets', petController.getPets);



const PORT = 4000;
app.listen(PORT, () => console.log(`I'm listening on port ${PORT}`));