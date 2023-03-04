const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
const MONGO_URL = "mongodb+srv://aakarshsahu:Aakarsh@#$1437@cluster0.wapzcve.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(MONGO_URL , { useNewUrlParser: true });


const userSchema = mongoose.Schema({
  name : String,
  username : String,
  email : String,
  password : String,
  products: [{type : mongoose.Schema.Types.ObjectId, ref:"product"}]
})
userSchema.plugin(plm);
module.exports = mongoose.model("user",userSchema);

