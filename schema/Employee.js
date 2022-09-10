const mongoose = require("mongoose");


const employeeSchema = new mongoose.Schema({
    name: String,
    jobDescription: String,
    age :Number,
    companyName: String,
    createdAt: Date,
    updatedAt: Date
});

module.exports = mongoose.model("Employee", employeeSchema)