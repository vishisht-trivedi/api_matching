const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');
const verifyToken = require('../middleware/authMiddleware');

router.get('/', verifyToken, accountController.getAccounts);  // GET /accounts
router.post('/:id/status', verifyToken, accountController.updateCompanyStatus);
module.exports = router;
