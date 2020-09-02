const Employee = require('../models/Employee');
const errorHandler = require('../helpers/dbErrorHandler');

module.exports = {
  createEmployee: async (req, res) => {
    const employee = new Employee(req.body);
    try {
      await employee.save();
      return res.status(200).json({
        message: 'New employee was created',
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
  },

  employeeById: async (req, res, next, id) => {
    try {
      let employee = await Employee.findById(id);
      if (!employee)
        return res.status(500).json({
          error: 'Employee not found',
        });
      req.employee = employee;
      next();
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        error: 'Could not retrieve employee',
      });
    }
  },

  singleEmployee: (req, res) => {
    try {
      return res.json(req.employee);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
  },

  listEmployees: async (req, res) => {
    try {
      let employee = await Employee.find().populate('jobsWorked');
      res.json(employee);
    } catch (err) {
      return res.status(500).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
  },

  updateEmployee: async (req, res) => {
    try {
      let employee = req.employee;
      employee = extend(employee, req.body);
      await employee.save();
      res.status(200).json(employee);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
  },
  removeEmployee: async (req, res) => {
    try {
      let employee = req.employee;
      let deletedEmployee = await employee.remove();
      res.status(200).json({
        message: `${deletedEmployee.firstName} was successfully removed from employee list`,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
  },
};
