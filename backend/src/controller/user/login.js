const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: 'User not found'
            });
        }
        user.comparePassword(password, (err, isMatch) => {
            if (err) {
                return res.status(400).json({
                    message: 'Something went wrong'
                });
            }
            if (!isMatch) {
                return res.status(400).json({
                    message: 'Invalid credentials'
                });
            }
            const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
            res.json({
                message: 'Login Successful',
                token
            });
        });
    } catch (error) {
        return res.status(400).json({
            message: 'Error',
            error: error.message
        });
    }
};
module.exports = login;