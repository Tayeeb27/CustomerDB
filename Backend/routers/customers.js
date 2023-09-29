const { Router } = require('express');
const router = Router();
const customersController = require('../controllers/customers')

router.get('/', customersController.index)
router.get('/:id', customersController.show)
router.post('/', customersController.create)
router.patch('/:id', customersController.update)
router.delete('/:id', customersController.destroy)

module.exports = router;