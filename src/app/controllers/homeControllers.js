const Clothe = require('../models/Clothe');

const { multipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose')


class homeControllers {
  home(req, res, next) {
      Clothe.find({ sale: { $gt: 0 } })
        .then(clothes => {
          res.render('user/home', { 
            clothes: multipleMongooseToObject(clothes) });
        })
        .catch(next)
  }

}
module.exports = new homeControllers();