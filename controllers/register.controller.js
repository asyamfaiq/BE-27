const bcrypt = require('bcrypt');
const Register = require("../models/register");

module.exports = {
    addUser: (req, res) => {
        const data = req.body

        const saltRounds = 10
        const hash = bcrypt.hashSync(data.password, saltRounds);
        data.password = hash

        const user = new Register(data)

        user.save()

        res.status(201).json({
        message: "data created successfully",
    })
    }
};
