// Create web server
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const auth = require('../middleware/auth');

// Create comment
// POST /api/comment
router.post('/', auth, commentController.createComment);

// Get comment
// GET /api/comment
router.get('/', commentController.getComment);

// Update comment
// PUT /api/comment
router.put('/', auth, commentController.updateComment);

// Delete comment
// DELETE /api/comment
router.delete('/', auth, commentController.deleteComment);

module.exports = router;