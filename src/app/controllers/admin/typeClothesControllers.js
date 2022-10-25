const TypeClothe = require("../../models/TypeClothe");
const {multipleMongooseToObject} = require('../../../util/mongoose')
const {mongooseToObject} = require('../../../util/mongoose')

class typeClothesControllers {
  
    show(req, res, next){   
      TypeClothe.find({})
         .then(clothes => {
           res.render('admin/type_clothes/show', {clothes: multipleMongooseToObject(clothes) });
          })
        .catch(next)
      }

  create(req, res) {
    res.render("admin/type_clothes/create",{ layout: "admain" });
    }

  save(req,res,next){
    const clothe = new TypeClothe(req.body);
    clothe.save()
      .then(()=>res.redirect("/admin/typeClothes/show",))
      .catch(err=>{

      })
    // res.json(req.body);
  }


  edit(req, res, next){   
    TypeClothe.findById(req.params.id)
     .then(clothes => {
        res.render('admin/type_clothes/edit', {clothes: mongooseToObject(clothes) });
      })
    .catch(next)
  }

  update(req, res, next ){
    TypeClothe.updateOne({_id: req.params.id},req.body)
    .then(()=>res.redirect('admin/typeClothes/show'))
    .catch(next);
  }
  delete(req, res, next){
    TypeClothe.deleteOne({_id: req.params.id})
    .then(()=>res.redirect('back'))
    .catch(next)
  }


}
module.exports = new typeClothesControllers();
