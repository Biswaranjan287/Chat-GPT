const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const chatController = require('../controllers/chat.contoller');

const router = express.Router()

/* POST /api/chat/ */
router.post('/', authMiddleware.authUser, chatController.createChat)

module.exports = router