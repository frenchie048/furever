module.exports = {
    //registering new user
    createUser: (req, res) => {
        const db = req.app.get('db');
        const { email, first_name, last_name, picture, username, password } = req.body;

        db.create_user([email, first_name, last_name, picture, username, password]).then(user => {
            res.status(200).json(user)
        }).catch(err => console.log(err));
    },
    //logging in existing user
    loginUser: (req, res) => {
        const db = req.app.get('db');
        const { username, password } = req.body;

        db.get_user_by_un_pw([username, password]).then(user => {
            res.status(200).send(user)
        }).catch(err => console.log(err))
    },
    getUsers: (req, res) => {
        const db = req.app.get('db');

        db.get_users().then(users => {
            res.status(200).send(users)
        }).catch(err => console.log(err))
    },
    getPets: (req, res) => {
        const db = req.app.get('db');

        db.get_pets().then(pets => {
            res.status(200).send(pets)
        }).catch(err => console.log(err))
    }
}