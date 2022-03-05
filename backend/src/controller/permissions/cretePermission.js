const Permission = require('../../models/permission');
const createPermission = (req, res) => {
    const { name, collection, read, write, me, description } = req.body;
    const permission = new Permission({
        name,
        collection,
        read,
        write,
        me,
        description
    });
    permission.save()
        .then(permission => res.json(permission))
        .catch(err => res.json(err));
};
module.exports = createPermission