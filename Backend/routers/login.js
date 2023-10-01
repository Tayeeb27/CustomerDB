const { Router } = require('express');
const router = Router();
const loginController = require('../controllers/login')

router.get('/', loginController.index);
router.post('/', loginController.getUserByEmail);

module.exports = router;