const Clothe = require("../../models/Clothe");
const {
  mongooseToObject,
  mutipleMongooseToObject,
} = require("../../../util/mongoose");

class adminControllers {
  
  show(req, res) {
    res.render('admin/show',{ layout: "admain" });
  }
  
}
module.exports = new adminControllers();
