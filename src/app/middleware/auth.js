const jwt = require('jsonwebtoken')
const Account = require('../models/Account')
const auth = {
    verifyToken: (req, res, next)=>{
        const token = req.cookies.jwt
        if(token){
            jwt.verify(token, 'secret', (err, decodedToken)=>{
                if (err){
                    res.redirect('/login')
                }else{
                    next()
                }
            })
        }
        else{
            res.redirect('/login')
        }
    },
   CheckUser: (req, res, next) => {
    const token = req.cookies.jwt
    if(token){
        jwt.verify(token, 'next user secret',async (err, decodedToken)=>{
            if(err){
                res.locals.user = null
                res.status(500).json('token khong hop le')
                next()
            }else{
                let user = await Account.findById(decodedToken.id)
                res.locals.user = user.toObject()
                next()
            }
        })
    }else{
        res.locals.user = null
        next()
    }
}   
}
module.exports = auth;