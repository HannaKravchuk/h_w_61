const express = require('express');
const router = express.Router();
const controller = require('../controllers/articlesController');
const auth = require('../middlewares/authMiddleware');
const accessControl = require('../middlewares/accessControl');

router.get('/', auth, accessControl, controller.getArticles);
router.get('/:articleId', auth, accessControl, controller.getArticleById);

module.exports = router;
