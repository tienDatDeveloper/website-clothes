const Clothe = require("../../models/Clothe");
const {multipleMongooseToObject} = require('../../../util/mongoose')
const {mongooseToObject} = require('../../../util/mongoose')
const PAGE_SIZE = 4;

class listClothesControllers {
  
  show(req, res, next){   
    var page = req.query.page;
    if (page) {
      page = parseInt(page)
      var start = (page - 1) * PAGE_SIZE;
      Clothe.find({})
        .skip(start)
        .limit(PAGE_SIZE)
        .then(clothes => {
          res.render('admin/list_clothes/show', {clothes: multipleMongooseToObject(clothes) });
         })
       .catch(next)
    }
    else {
      Clothe.find({})
      .then(clothes => {
        res.render('admin/list_clothes/show', {clothes: multipleMongooseToObject(clothes) });
       })
     .catch(next)
    }

  }

  create(req, res) {
    res.render("admin/list_clothes/create",{ layout: "admain" });
  }

  save(req,res,next){
    const clothe = new Clothe(req.body);
      clothe.save()
      .then(()=>res.redirect("/admin/listClothes/show"))
      .catch(err=>{

      })
    // res.json(req.body);
  }
  edit(req, res, next){   
    Clothe.findById(req.params.id)
     .then(clothes => {
        res.render('admin/list_clothes/edit', {clothes: mongooseToObject(clothes) });
      })
    .catch(next)
  }

  update(req, res, next ){
    Clothe.updateOne({_id: req.params.id},req.body)
    .then(()=>res.redirect('admin/listClothes/show?page=1'))
    .catch(next);
  }

  delete(req, res, next){
    Clothe.deleteOne({_id: req.params.id})
    .then(()=>res.redirect('back'))
    .catch(next)
  }

}
module.exports = new listClothesControllers();
