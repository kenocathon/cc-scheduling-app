const express = require('express');
const customerCtrl = require('../../controllers/customers');


const userRouter = express.Router();

userRouter.route('/customers')
  .post(customerCtrl.createCustomer)
  .get(customerCtrl.listCustomers);

userRouter.route('/customer/:customerId')
  .get(customerCtrl.singleCustomer)
  .put(customerCtrl.updateCustomer)
  .delete(customerCtrl.removeCustomer);

userRouter.param('customerId', customerCtrl.customerById)

module.exports = userRouter;