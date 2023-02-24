const { Employee } = require("../../handler");

const getEmployees = async (req, res, next) => {
    // Get all employees with cursor-based pagination using createdAt as cursor

    try {
        const { limit, cursor } = req.query;
        const employees = await Employee.getEmployees(limit, cursor);
        res.json(employees);
    } catch (err) {
        next(err);
    }
};

const getEmployee = async (req, res, next) => {
    try {
        const { id } = req.params;
        const employee = await Employee.getEmployee(id);
        res.json(employee);
    } catch (err) {
        next(err);
    }
};

const updateEmployee = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const response = await Employee.updateEmployee(id, data);
        res.json(response);
    } catch (err) {
        next(err);
    }
};

const deleteEmployee = async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await Employee.deleteEmployee(id);
        res.json(response);
    } catch (err) {
        next(err);
    }
};

const addEmployee = async (req, res, next) => {
    try {
        const data = req.body;
        const response = await Employee.addEmployee(data);
        res.json(response);
    } catch (err) {
        next(err);
    }
};

module.exports = { addEmployee, deleteEmployee, getEmployee, getEmployees, updateEmployee };
