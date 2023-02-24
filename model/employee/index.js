const mongoose = require("mongoose");

// Define employee schema
const employeeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: String,
  },
  { timestamps: true }
);

// Define employee model
const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
