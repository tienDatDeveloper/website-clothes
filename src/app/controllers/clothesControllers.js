const Clothe = require('../models/Clothe');

const { multipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose');
const { parse } = require('dotenv');
const PAGE_SIZE = 8;
class clothesControllers {
  show(req, res, next) {
    var page = req.query.page;
    if (page) {
      page = parseInt(page)
      var start = (page - 1) * PAGE_SIZE;
      Clothe.find({})
        .skip(start)
        .limit(PAGE_SIZE)
        .then(clothes => {
          res.render('user/clothes', { clothes: multipleMongooseToObject(clothes) });
        })
        .catch(next)
    }
    else {
      Clothe.find({})
        .then(clothes => {
          res.render('user/clothes', { clothes: multipleMongooseToObject(clothes) });
        })
        .catch(next)
    }
  }

  phukien(req, res, next) {
    Clothe.find({})
      .then(clothes => {
        res.render('user/phukien', { clothes: multipleMongooseToObject(clothes) });
      })
      .catch(next)
  }

  clothesNam(req, res, next) {
    var page = req.query.page;
    if (page) {
      page = parseInt(page)
      var start = (page - 1) * PAGE_SIZE;
      Clothe.find({ type_sex: 'Nam' })
        .skip(start)
        .limit(PAGE_SIZE)
        .then(clothes => {
          res.render('user/clothes', { clothes: multipleMongooseToObject(clothes) });
        })
        .catch(next)
    }
    else {
      Clothe.find({ type_sex: 'Nam' })
        .then(clothes => {
          res.render('user/clothes', { clothes: multipleMongooseToObject(clothes) });
        })
        .catch(next)
    }

  }
  clothesNu(req, res, next) {
    var page = req.query.page;
    // $.ajax({
    //   url:'localhost:4000/Clothes/Nu'+page,
    //   type: 'get'
    // })
    if (page) {
      page = parseInt(page)
      var start = (page - 1) * PAGE_SIZE;
      Clothe.find({ type_sex: 'Nu' })
        .skip(start)
        .limit(PAGE_SIZE)
        .then(clothes => {
          res.render('user/clothes', { clothes: multipleMongooseToObject(clothes) });
        })
        .catch(next)
    }
    else {
      Clothe.find({ type_sex: 'Nu' })
        .then(clothes => {
          res.render('user/clothes', { clothes: multipleMongooseToObject(clothes) });
        })
        .catch(next)
    }
  }

}
module.exports = new clothesControllers();