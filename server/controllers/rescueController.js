module.exports = {
    createRescue: (req, res) => {
        const db = req.app.get('db');
        const { rescue_name, rescue_username, rescue_password, logo, rescue_email, rescue_phone_number, rescue_city, rescue_state } = req.body;

        bcrypt.hash(rescue_password, saltRounds).then(hashedPassword => {
            db.create_rescue([rescue_name, rescue_username, logo, rescue_email, rescue_phone_number, rescue_city, rescue_state, hashedPassword]).then(() => {
                req.session.rescue = { rescue_username }
                res.status(201).send(req.session.rescue)
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
    loginRescue: (req, res) => {
        const db = req.app.get('db');
        const { username, password } = req.body;

        db.get_rescue_by_un_pw([username, password]).then(rescue => {
            if (rescue.length) {
                bcrypt.compare(password, rescue[0].password).then(passwordMatch => {
                    if (passwordMatch) {
                        req.session.rescue = { rescue_id: rescue[0].rescue_id, rescue_email: rescue[0].rescue_email, rescue_name: rescue[0].rescue_name, rescue_username: rescue[0].rescue_username, rescue_phone_number: rescue[0].rescue_phone_number, rescue_city: rescue[0].rescue_city, rescue_state: rescue[0].state, logo: rescue[0].logo }
                        res.status(200).send(req.session.rescue)
                    } else {
                        res.status(401).send({ message: 'Invalid password' })
                    }
                });
            } else {
                res.status(401).send({ message: 'Unknown rescue, please make an account' })
            }
        }).catch(err => {
            console.log(err);
            res.status(500).send({ message: 'An error occured. Please try again later' })
        })
    },

    getRescues: (req, res) => {
        const db = req.app.get('db');

        db.get_rescues().then(rescues => {
            res.status(200).send(rescues)
        }).catch(err => console.log(err))
    },

    // //logout user
    // logoutUser: (req, res) => {
    //     req.session.destroy()
    //     res.status(200).end()
    // },

    // //edit user
    // editUser: (req, res) => {
    //     const db = req.app.get('db');
    //     const { username } = req.params;
    //     const { first_name, last_name, email } = req.body;

    //     db.edit_user([username, first_name, last_name, email]).then(response => {
    //         res.status(200).send(response);
    //     }).catch(err => console.log(err.detail))
    // },

    // //delete user
    // deleteUser: (req, res) => {
    //     const db = req.app.get('db');
    //     const { username } = req.params;

    //     db.delete_user(username).then(user => {
    //         res.status(200).send(`Account for ${username} deleted`)
    //     }).catch(err => console.log(err))
    // }
}
