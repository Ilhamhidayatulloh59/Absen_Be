const { Op } = require('sequelize');
const database = require('../models');
const Absen = database.absen;


module.exports = {
  addAbsen: async (req, res) => {
    const {NIS, absen, date} = req.body
    const jam = []
    const today = new Date(date).getDay()
    switch (today) {
        case 0:
            jam.push(5)
        case 1:
            jam.push(7)
        case 2:
            jam.push(7)
        case 3:
            jam.push(7)
        case 4:
            jam.push(5)
        case 5:
            jam.push(0)
        case 6:
            jam.push(7)
        default:
            jam.push(0)
      }

    try {
        const absens = await Absen.create({
            tanggal: date,
            absen,
            studentNIS: NIS,
            jam: jam[0]
        })
        res.status(201).send(absens)
    } catch (err) {
        console.log(err)
        res.status(401).send(err)
    }
  },
};
