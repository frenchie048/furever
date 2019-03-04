const express = require('express');
const bodyParser = require('body-parser');
// const session = require('express-session');
const massive = require('massive');
const controller = require('./controllers/controller');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
// app.use(express.static(`${__dirname}/../build`));

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
app.post('/api/users', controller.createUser);

app.post('/api/users', controller.loginUser);



const PORT = 4050;
app.listen(PORT, () => console.log(`I'm listening on port ${PORT}`));