const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// GET all images
router.get('/', courseController.getAllImages);

module.exports = router;