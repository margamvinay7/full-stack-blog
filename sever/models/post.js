const mongoose = require('mongoose')
const Schema =mongoose.Schema;
 const postSchema=new Schema({
   title: String,
   message: String,
   name: String,
   creater: String,



 })
 const postMessage = mongoose.model('post',postSchema);
  module.exports= postMessage