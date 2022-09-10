const mongoose = require("mongoose")

const personSchema = new mongoose.Schema({
    firstName: String,
    age: Number,
    favoriteFood: Array
  
});

module.exports = mongoose.model("Person", personSchema);