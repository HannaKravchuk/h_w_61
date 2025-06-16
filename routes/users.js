const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');
const auth = require('../middlewares/authMiddleware');

router.get('/', auth, controller.getUsers);
router.get('/:userId', auth, controller.getUserById);

module.exports = router;
