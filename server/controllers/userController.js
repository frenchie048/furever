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
                        req.session.user = { user_id: user[0].user_id, email: user[0].email, first_name: user[0].first_name, last_name: user[0].last_name, username: user[0].username, picture: user[0].picture }
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

    //get a user's matches
    getUserMatches: (req, res) => {
        const db = req.app.get('db');
        const { username } = req.params;

        db.get_users_matches(username).then(matches => {
            res.status(200).send(matches)
        }).catch(err => console.log(err))
    },

    //add a pet to match table
    addMatch: (req, res) => {
        const db = req.app.get('db');
        const { username } = req.params;
        const { pet_id, user_id } = req.body;

        db.add_match([username, pet_id, user_id]).then(match => {
            res.status(200).send(match)
        }).catch(err => console.log(err))
    },



    //get a user's rejects
    getUserRejects: (req, res) => {
        const db = req.app.get('db');
        const { username } = req.params;

        db.get_users_rejects(username).then(rejects => {
            res.status(200).send(rejects)
        }).catch(err => console.log(err))
    },

    //add a pet to reject table
    addReject: (req, res) => {
        const db = req.app.get('db');
        const { username } = req.params;
        const { pet_id, user_id } = req.body;

        db.add_reject([username, pet_id, user_id]).then(reject => {
            res.status(200).send(reject)
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
        // console.log('beforeeeee', req.session.user);
        req.session.user = new_user;
        // console.log('aftaaaaa', req.session.user);
        res.status(200).send(req.session.user)
        // console.log(new_user);
    }
}