const Role = require('../../models/role');
const createRole = async (req, res) => {
    const { name, description } = req.body;
    const role = new Role({
        name,
        description,
    });
    role.save()
        .then(role => res.json(role))
        .catch(err => res.json(err));

};
module.exports = createRole;