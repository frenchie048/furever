const express = require('express');
const bodyParser = require('body-parser');
// const session = require('express-session');
const massive = require('massive');
// const axios = require('axios');
// const authController = require('./controller/authController');
// const crayonController = require('./controller/crayonController');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false
// }))

massive(process.env.CONNECTION_STRING).then((db) => {
    app.set('db', db);
    console.log('Connected to the database')
})

//endpoints


const PORT = 4000;
app.listen(PORT, () => console.log(`I'm listening on port ${PORT}`));