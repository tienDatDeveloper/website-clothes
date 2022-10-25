const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Account = new Schema({
    UserName: { type: String },
    Email: { type: String },
    PhoneNumber: { type: String },
    Password: { type: String },
    PasswordConfirm: { type: String },  
    createAt: { type: Date, default: Date.now},
    updateAt: { type: Date, default: Date.now},   
});

module.exports = mongoose.model("Account", Account,);