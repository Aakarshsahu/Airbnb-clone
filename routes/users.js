const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
const MONGO_URL = "mongodb+srv://aakarshsahu:1JLSZmpX4up8vMr5@cluster0.erurd0k.mongodb.net/?retryWrites=true&w=majority";
async function connetion(){
  try {
    await mongoose.connect(MONGO_URL , {useNewUrlParser:true , useUnifiedTopology: true });
  } catch (error) {
    console.error(error);
  }
}
connetion();


const userSchema = mongoose.Schema({
  name : String,
  username : String,
  email : String,
  password : String,
  products: [{type : mongoose.Schema.Types.ObjectId, ref:"product"}]
})
userSchema.plugin(plm);
module.exports = mongoose.model("user",userSchema);

