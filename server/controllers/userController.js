const bcrypt = require('bcrypt');
const saltRounds = 12;

module.exports = {
    //registering new user
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
                        req.session.user = { email: user[0].email, first_name: user[0].first_name, last_name: user[0].last_name, username: user[0].username, picture: user[0].picture }
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

    //edit user
    editUser: (req, res) => {
        const db = req.app.get('db');
        const { username } = req.params;
        const { first_name, last_name, email } = req.body;

        db.edit_user([username, first_name, last_name, email]).then(response => {
            res.status(200).send(response);
        }).catch(err => console.log(err.detail))
    },








    //delete user
    deleteUser: (req, res) => {
        const db = req.app.get('db');
        const { username } = req.params;

        db.delete_user(username).then(user => {
            res.status(200).send(`Account for ${username} deleted`)
        }).catch(err => console.log(err))
    },
    getUserMatches: (req, res) => {
        const db = req.app.get('db');

        db.get_users_matches().then(matches => {
            res.status(200).send(matches)
        }).catch(err => console.log(err))
    },






    getUsers: (req, res) => {
        const db = req.app.get('db');

        db.get_users().then(users => {
            res.status(200).send(users)
        }).catch(err => console.log(err))
    },
    getOneUser: (req, res) => {
        const db = req.app.get('db');
        const { username } = req.params;

        db.get_one_user(username).then(user => {
            res.status(200).send(user)
        }).catch(err => console.log(err))
    },
    updateUserSession: (req, res) => {
        const { new_user } = req.body;
        console.log('beforeeeee', req.session.user);
        req.session.user = new_user;
        console.log('aftaaaaa', req.session.user);
        // console.log(new_user);
    }
}