const express = require('express');
const router = express.Router();
const astrologerController = require('../controllers/astrologerController');

// Get all astrologers with filtering and pagination
router.get('/', astrologerController.getAllAstrologers);

// Get one astrologer
router.get('/:id', astrologerController.getAstrologerMiddleware, astrologerController.getAstrologerById);

// Create an astrologer
router.post('/', astrologerController.upload.single('image'), astrologerController.createAstrologer);

// Update an astrologer
router.put('/:id', astrologerController.upload.single('image'), astrologerController.getAstrologerMiddleware, astrologerController.updateAstrologer);

// Delete an astrologer
router.delete('/:id', astrologerController.getAstrologerMiddleware, astrologerController.deleteAstrologer);

module.exports = router;

