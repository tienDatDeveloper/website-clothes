const Account = require('../models/Account');
const Clothe = require('../models/Clothe');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcrypt');
const { multipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose');
const maxAge = 3*24*60*60
const createToken = (id) =>{
  return jwt.sign( { id  }, 'next user secret', { 
      expiresIn: maxAge 
  })
}
class accountControllers {
  login(req, res, next) {
    res.render('user/login')
  }
  
  // async infor(req, res, next) {
  //   try {
  //     const account = await Account.findOne({ PhoneNumber: req.body.PhoneNumber });
  //     const clothes = await Clothe.find();
  //     var phone = req.body.PhoneNumber;
  //     var password = req.body.Password;
  //     var data = {
  //       phone: phone,
  //       password: password,
  //     }
  //     if (!account) {
  //       res.status(404).redirect('/login')
  //     }
  //     const validPassword = await bcrypt.compare(req.body.Password, account.Password);
  //     if (!validPassword) {
  //       res.status(404).redirect('/login')
  //     }
  //     if (account && validPassword) {
  //     //     const accessToken = jwt.sign({
  //     //       id: account.id,
  //     //       admin: account.Admin
  //     //     },"secret",{expiresIn:"30s"}
  //     //     )
  //     //     const {Password, ...others} = account._doc;
  //     //     res.cookie('jwt',accessToken, { httpOnly: true, maxAge: maxAge * 1000})
  //     // // return  res.status(200).json({...others, accessToken})
  //     const token = createToken(account._id)
  //     res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000})
  //     // res.status(200).json( { account: account._id })
  //     }
  //   } catch (err) {
  //     res.redirect("/login")
  //   }
  // }
  async infor(req, res, next) {
    console.log(req.body)
    const { phone, pin } = req.body
    try{
      const user = await Account.findOne({ PhoneNumber: req.body.PhoneNumber });
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000})
        res.render("user/home")
    }
    catch(next){
        res.status(400).json("loi")
    }
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

  async save(req, res, next) {

    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.Password, salt);

      // create data new 
      const newAccount = await new Account({
        UserName: req.body.UserName,
        PhoneNumber: req.body.PhoneNumber,
        Email: req.body.Email,
        Password: hashed,
        PasswordConfirm: hashed,
      });
      newAccount.save();
      res.redirect('/login');
    }
    catch (err) {
      res.status(500).json(err);
    }
  }

  logout(req,res, next) {
    if(req.session.account) {
      delete req.session.account;
      res.redirect('/login');
  } else {
      res.redirect('/');
  }      
  }
}

module.exports = new accountControllers();



  // async infor(req, res, next) {
  //   try {
  //     const account = await Account.findOne({ PhoneNumber: req.body.PhoneNumber });
  //     // const clothes = await Clothe.find({ sale: { $gt: 0 } });
  //     var phone = req.body.PhoneNumber;
  //     var password = req.body.Password;
  //     if (!account) {
  //       res.status(404).render('user/login');
  //     }
  //     const validPassword = await bcrypt.compare(req.body.Password, account.Password);
  //     if (!validPassword) {
  //       res.status(404).render('user/login');
  //     }
  //     if (account && validPassword) {
  //       // jwt.sign({
  //       //   id: account.id,
  //       //   admin:account.Admin
  //       // },
  //       //   "secretkey",
  //       //   {expiresIn: "10s"}
  //       // )
  //       req.session.user = account;
  //       const token = req.session;
  //       res.render('user/home', {
  //         account: mongooseToObject(account),
  //         clothes: multipleMongooseToObject(clothes),
  //       });
  //         // res.send(token);       
  //     }
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // }