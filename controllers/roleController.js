const { Op } = require('sequelize');
const database = require('../models');
const user = database.user;
const role = database.role;


module.exports = {
  role: async (req, res) => {
    try {
        const roles = await role.findAll({
          where: {section: {[Op.not]: "Super Admin"}},
          attributes: ['section', 'id']
        })
        res.status(201).send(roles)
    } catch (err) {
        console.log(err)
        res.status(401).send(err)
    }
  },

};
