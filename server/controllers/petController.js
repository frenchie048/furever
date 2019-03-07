module.exports = {
    getPets: (req, res) => {
        const db = req.app.get('db');

        db.get_pets().then(pets => {
            res.status(200).send(pets)
        }).catch(err => console.log(err))
    }
}