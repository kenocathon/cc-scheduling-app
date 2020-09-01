const express = require('express');
const customerCtrl = require('../../controllers/customers');
const employeeCtrl = require('../../controllers/employees');
const jobCtrl = require('../../controllers/jobs');

const userRouter = express.Router();

//*******CUSTOMER ROUTES
userRouter
  .route('/customers')
  .post(customerCtrl.createCustomer)
  .get(customerCtrl.listCustomers);

//SINGLE CUSTOMER
userRouter
  .route('/customer/:customerId')
  .get(customerCtrl.singleCustomer)
  .put(customerCtrl.updateCustomer)
  .delete(customerCtrl.removeCustomer);

//******EMPLOYEE ROUTES
userRouter
  .route('/employees')
  .post(employeeCtrl.createEmployee)
  .get(employeeCtrl.listEmployees);

//SINGLE EMPLOYEE
userRouter
  .route('/employee/:employeeId')
  .get(employeeCtrl.singleEmployee)
  .put(employeeCtrl.updateEmployee)
  .delete(employeeCtrl.removeEmployee);

//******JOB ROUTES
userRouter.route('/jobs').post(jobCtrl.scheduleJob).get(jobCtrl.listJobs);

//SINGLE JOB
userRouter
  .route('/job/:jobId')
  .get(jobCtrl.singleJob)
  .put(jobCtrl.updateJob)
  .delete(jobCtrl.removeJob);

//PARAMS
userRouter.param('customerId', customerCtrl.customerById);
userRouter.param('empolyeeId', employeeCtrl.employeeById);
userRouter.param('jobId', jobCtrl.jobById);

module.exports = userRouter;
