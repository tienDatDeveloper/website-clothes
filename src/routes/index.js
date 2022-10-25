const adminRouter = require("./admin/admin");
const account = require("./user/account");
const home = require("./user/home");
const clothes = require ("./user/clothes");
const detail = require("./user/detail");
  
//  Router Admin
// const ad_clothe = require("./admin/ad_clothe");

function route(app){
    app.use("/admin", adminRouter);
    app.use(account);
    app.use(home);
    app.use(clothes);
    app.use(detail);
    
    
    // app.use ("quản lý admin")
    


}

module.exports = route;