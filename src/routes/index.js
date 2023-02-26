const adminRouter = require("./admin/admin");
const account = require("./user/account");
const home = require("./user/home");
const clothes = require ("./user/clothes");
const detail = require("./user/detail");
const auth = require('../app/middleware/auth')
//  Router Admin
// const ad_clothe = require("./admin/ad_clothe");

function route(app){
    app.use('*', auth.CheckUser)
    app.use("/admin", adminRouter);
    app.use(account);
    app.use(home);
    app.use(clothes);
    app.use(detail);
}

module.exports = route;