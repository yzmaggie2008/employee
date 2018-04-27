
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: {type: String, default: null},
    updateDate: { type: Date, default: Date.now },
    image: { type: String, default: null },
    title: { type: String, default: null },
    gender: { type: String, default: null },
    email: { type: String, defulat: null },
    officePhone: { type: Number, default: null },
    cellPhone: { type: Number, defuault: null },
    directReports: { type: [String], defulat: [] },
    manager: { type: String, default: null }
    });

let Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;