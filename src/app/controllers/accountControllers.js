const Account = require('../models/Account');
const Clothe = require('../models/Clothe');
const { multipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose')
class accountControllers {
  login(req, res, next) {
    Account.find({})
      .then(account => {
        res.render('user/login', {
          account: multipleMongooseToObject(account)
        });
      })
      .catch(next)
  }

  infor(req, res, next) {
    Account.findOne({ PhoneNumber: req.body.PhoneNumber, Password: req.body.Password })
      .then(account => {
        if (account) {
          res.render('partials/header', {
            account: mongooseToObject(account),
          });
        }
        else {
          res.status(404).render('user/login');
        }
      })
      .catch(next)
  }



  register(req, res, next) {
    Account.find({})
      .then(registers => {
        res.render('user/register', {
          registers: multipleMongooseToObject(registers)
        });
      })
      .catch(next)
  }

  save(req, res, next) {
    const account = new Account(req.body);
    account.save()
      .then(() => res.redirect("/login"))
      .catch(err => {

      })
  }
}


module.exports = new accountControllers();