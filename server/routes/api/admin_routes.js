const express = require('express');
const userCtrl = require('../../controllers/users');

const adminRouter = express.Router();

adminRouter.route('/users').post(userCtrl.createUser).get(userCtrl.list);

adminRouter
  .route('/user/:userId')
  .get(userCtrl.read)
  .put(userCtrl.update)
  .delete(userCtrl.remove);

adminRouter.param('userId', userCtrl.userByID);

module.exports = adminRouter;
