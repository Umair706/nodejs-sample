const { Employee } = require("../../model");
const EXCEPTIONS = require("../../exceptions");
const getEmployees = async (limit = 10, cursor) => {

    // Find employees with pagination and sort by creation date
    const query = cursor ? { createdAt: { $lt: cursor } } : {};
    const employees = await Employee.find(query).sort({ createdAt: -1 }).limit(parseInt(limit));

    // Send employees and next cursor as response
    const nextCursor = employees.length ? employees[employees.length - 1].createdAt : null;
    return {
        data: employees,
        nextCursor,
    };
};

const getEmployee = async (id) => {
    if (!id) throw EXCEPTIONS.INVALID_EMPLOYEE_ID;
    const employee = await Employee.findById(id);
    if (!employee) {
        throw EXCEPTIONS.EMPLOYEE_NOT_FOUND;
    }
    return { data: employee };
};

const updateEmployee = async (id, data) => {
    if (!id) throw EXCEPTIONS.INVALID_EMPLOYEE_ID;
    if (!data) throw EXCEPTIONS.INVALID_PAYLOAD;
    if (!data.name) throw EXCEPTIONS.NAME_NOT_PROVIDED;
    if (!data.email) throw EXCEPTIONS.EMAIL_NOT_PROVIDED;
    if (!data.phone) throw EXCEPTIONS.PHONE_NOT_PROVIDED;

    const employee = await Employee.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
    });
    if (!employee) {
        throw EXCEPTIONS.EMPLOYEE_NOT_FOUND;
    }
    return { data: employee };
};

const deleteEmployee = async (id) => {
    const employee = await Employee.findByIdAndDelete(id);
    if (!employee) {
        throw EXCEPTIONS.EMPLOYEE_NOT_FOUND;
    }
    return { data: employee };
};

const addEmployee = async (data) => {
    if (!data) throw EXCEPTIONS.INVALID_PAYLOAD;
    if (!data.name) throw EXCEPTIONS.NAME_NOT_PROVIDED;
    if (!data.email) throw EXCEPTIONS.EMAIL_NOT_PROVIDED;
    if (!data.phone) throw EXCEPTIONS.PHONE_NOT_PROVIDED;
    const employee = new Employee(data);
    await employee.save();
    return { data: employee };
};

module.exports = {
    addEmployee,
    deleteEmployee,
    getEmployee,
    getEmployees,
    updateEmployee,
};
