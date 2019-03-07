const bcrypt = require('bcrypt');
const saltRounds = 12;

module.exports = {
    //registering new user
    //added bcrypt
    createUser: (req, res) => {
        const db = req.app.get('db');
        const { email, first_name, last_name, picture, username, password } = req.body;

        bcrypt.hash(password, saltRounds).then(hashedPassword => {
            db.create_user([email, first_name, last_name, picture, username, hashedPassword]).then(() => {
                req.session.user = { username }
                res.status(201).send(req.session.user)
            }).catch(err => {
                if (error.message.match(/duplicate key/)) {
                    res.status(409).send({ message: 'That user already exists in database' })
                } else {
                    res.status(500).send({
                        message: 'Error occured on the server. Please contact the administrator'
                    })
                }
            });
        });
    },

    //logging in existing user
    loginUser: (req, res) => {
        const db = req.app.get('db');
        const { username, password } = req.body;

        db.get_user_by_un_pw([username, password]).then(user => {
            if (user.length) {
                bcrypt.compare(password, user[0].password).then(passwordMatch => {
                    if (passwordMatch) {
                        req.session.user = { username: user[0].username }
                        res.status(200).send(req.session.user)
                    } else {
                        res.status(401).send({ message: 'Invalid password' })
                    }
                });
            } else {
                res.status(401).send({ message: 'Unknown user, please make an account' })
            }
        }).catch(err => {
            console.log(err);
            res.status(500).send({ message: 'An error occured. Please try again later' })
        })
    },

    //logout user
    logoutUser: (req, res) => {
        req.session.destroy()
        res.status(200).end()
    },
    getUsers: (req, res) => {
        const db = req.app.get('db');

        db.get_users().then(users => {
            res.status(200).send(users)
        }).catch(err => console.log(err))
    }
}