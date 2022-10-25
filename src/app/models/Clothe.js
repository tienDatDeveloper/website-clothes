const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Clothe= new Schema({
    type_clothe: {  type: String },
    type_sex: {  type: String },
    image: {  type: String },
    title: {  type: String },
    color: { type: String},
    size: { type: String },
    price: { type: String },
    discount: { type: String },
    description: { type: String },
    rate: { type: String },
    sale: { type: String },
    slug: { type: String, slug: "title" }, 
    // slug:{type:String,maxLength:255},
    createAt: { type: Date, default: Date.now},
    updateAt: { type: Date, default: Date.now},
});
module.exports = mongoose.model("Clothe", Clothe);