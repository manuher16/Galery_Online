const User = require('../../models/user');
const Role = require('../../models/role');
const galery = require('../../models/galery');
const createUser = async (req, res) => {
    try {
        const role = await Role.findOne({ name: 'user' }, "_id");

        const { name, email, password, password_confirmation } = req.body;
        if (password_confirmation !== password) {
            return res.status(403).json({ message: "Contrasenas no coinciden" })
        }
        const user = new User({
            name,
            email,
            password,
            role: role._id
        });
        await user.save()
        res.status(200).json({
            message: 'User created successfully',
            user
        });
    }
    catch (err) {

        if (err.code === 11000) {
            res.status(400).json({
                message: 'User already exists'
            });
        }
        else {
            res.status(500).json({
                message: 'Error creating user'
            });
        }
    }

};
module.exports = createUser;