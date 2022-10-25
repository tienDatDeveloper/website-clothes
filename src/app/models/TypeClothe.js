const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const TypeClothe= new Schema({
    type_clothe: {  type: String },
    // slug:{type:String,maxLength:255},
    createAt: { type: Date, default: Date.now},
    updateAt: { type: Date, default: Date.now},
});
module.exports = mongoose.model("TypeClothe", TypeClothe);