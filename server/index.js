const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
require('dotenv').config();

const userController = require('./controllers/userController');
const petController = require('./controllers/petController');

const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Connected to the database')
})

//USER endpoints

//registering new user
app.post('/api/users', userController.createUser);

//logging in existing user
app.post('/login', userController.loginUser);

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

//get all users
app.get('/api/users', userController.getUsers);

//logout user
app.post('/logout', userController.logoutUser);


//PET endpoints

//get all pets
app.get('/api/pets', petController.getPets);

//GET MATCHED PETS

const PORT = 4000;
app.listen(PORT, () => console.log(`I'm listening on port ${PORT}`));