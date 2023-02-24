//imports
const express = require("express");
const router = express.Router();
const { Employee } = require("../../controller");

router.get("/all/?", Employee.getEmployees);
router.get("/:id", Employee.getEmployee);
router.put("/:id", Employee.updateEmployee);
router.post("/:id", Employee.addEmployee);
router.delete("/:id", Employee.deleteEmployee);

module.exports = router;
