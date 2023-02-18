const { Op } = require('sequelize');
const database = require('../models');
const student = database.student;


module.exports = {
  students: async (req, res) => {
    try {
        const students = await student.findAll()
        res.status(201).send(students)
    } catch (err) {
        console.log(err)
        res.status(401).send(err)
    }
  },
  student: async (req, res) => {
    const { search } = req.query
    try {
        const students = await student.findAll(
          {
            where: {
              [Op.or]: [
                {
                  Nama: search ? {
                      [Op.like]: "%" + search + "%"
                  } : {[Op.not]: null}
                },
                {
                  NIS: search ? {
                      [Op.like]: "%" + search + "%"
                  } : {[Op.not]: null}
                }
              ]
            }
          }
        )
        res.status(201).send(students)
    } catch (err) {
        console.log(err)
        res.status(401).send(err)
    }
  },
  studentByNIS: async (req, res) => {
    const { NIS } = req.params
    try {
        const result = await student.findOne(
          {
            where: {
              NIS
            }
          }
        )
        res.status(201).send(result)
    } catch (err) {
        console.log(err)
        res.status(401).send(err)
    }
  },
};
