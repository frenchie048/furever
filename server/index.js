const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
require('dotenv').config();

const controller = require('./controllers/controller');

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

//endpoints

//registering new user
app.post('/api/users', controller.createUser);

//logging in existing user
app.post('/api/users/username', controller.loginUser);

//get all users
app.get('/api/users', controller.getUsers);

//GET ALL PETS
app.get('/api/pets', controller.getPets);

//GET MATCHED PETS

const PORT = 4000;
app.listen(PORT, () => console.log(`I'm listening on port ${PORT}`));