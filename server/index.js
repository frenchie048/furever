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
    resave: true,
    saveUninitialized: false,
}))

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Connected to the database')
})

//USER endpoints

//SESSION ENDPOINTS
app.get('/api/user-data', (req, res) => {
    console.log('user-data-session', req.session.user);
    res.json({ user: req.session.user });
});

app.post('/api/user-session', userController.updateUserSession);

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

//get one user
app.get('/api/users/:username', userController.getOneUser);

//logout user
app.post('/logout', userController.logoutUser);

//edit user
app.put('/api/users/:username', userController.editUser);

// delete user
app.delete('/api/users/:username', userController.deleteUser);


//PET endpoints

//GET MATCHED PETS
app.get('/api/matches/:username', userController.getUserMatches);

//add a pet to matches
app.post('/api/matches/:username', userController.addMatch);

//GET REJECTED PETS
app.get('/api/rejects/:username', userController.getUserRejects);

//add a pet to rejects
app.post('/api/rejects/:username', userController.addReject);



//get all pets
app.get('/api/pets', petController.getPets);



const PORT = 4000;
app.listen(PORT, () => console.log(`I'm listening on port ${PORT}`));