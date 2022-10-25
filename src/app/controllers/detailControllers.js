const Clothe = require('../models/Clothe');

const { multipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose')


class detailControllers {
  show(req, res, next) {
    Clothe.findOne({ slug: req.params.slug })
      .then(clothes => {
        res.render('user/detail', { clothes: mongooseToObject(clothes) });
      })
      .catch(next)
  }
}
module.exports = new detailControllers();