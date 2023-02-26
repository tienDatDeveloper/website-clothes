const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Account = new Schema({
      UserName: {
        type: String,
        required: true,
      },
      Email: {
        type: String,
        required: true,
        unique: true,
      },
      Admin: {
        boolean: false,
      },
      PhoneNumber: {
        type: String,
        required: true,
      },
      Password: {
        type: String,
        required: true,
        unique: true,
      },
      PasswordConfirm: { 
        type: String,
        required: true,
      },  
      avatar: {
        type: String,
      },
    createAt: { type: Date, default: Date.now},
    updateAt: { type: Date, default: Date.now},   
});

module.exports = mongoose.model("Account", Account,);