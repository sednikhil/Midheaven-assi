const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Astrologer = require('../models/astrologer');

// Set up Multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory to store uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// Get all astrologers
router.get('/', async (req, res) => {
    try {
        const filters = {};

        if (req.query.name) {
            filters.name = { $regex: req.query.name, $options: 'i' }; // Case-insensitive regex search
        }
        if (req.query.expertise) {
            filters.expertise = { $regex: req.query.expertise, $options: 'i' }; // Case-insensitive regex search
        }
        if (req.query.experience) {
            filters.experience = parseInt(req.query.experience);
        }

        const astrologers = await Astrologer.find(filters);
        res.json(astrologers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one astrologer
router.get('/:id', getAstrologer, (req, res) => {
    res.json(res.astrologer);
});

// Create an astrologer
router.post('/add', upload.single('image'), async (req, res) => {
    const newAstrologer = {
        name: req.body.name,
        expertise: req.body.expertise,
        experience: req.body.experience,
        rating: req.body.rating,
        description: req.body.description,
        charges: req.body.charges,
        language: req.body.language,
        image: req.file ? req.file.path : 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg' // Path to the uploaded image or default image
    };

    try {
        const astrologer = new Astrologer(newAstrologer);
        const savedAstrologer = await astrologer.save();
        res.status(201).json(savedAstrologer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update an astrologer
router.put('/:id',  upload.single('image') , getAstrologer, async (req, res) => {
    if (req.body.name != null) {
        res.astrologer.name = req.body.name;
    }
    if (req.body.expertise != null) {
        res.astrologer.expertise = req.body.expertise;
    }
    if (req.body.experience != null) {
        res.astrologer.experience = req.body.experience;
    }
    if (req.body.rating != null) {
        res.astrologer.rating = req.body.rating;
    }
    if (req.body.description != null) {
        res.astrologer.description = req.body.description;
    }
    if (req.body.charges != null) {
        res.astrologer.charges = req.body.charges;
    }
    if (req.body.language != null) {
        res.astrologer.language = req.body.language;
    }
    if (req.file != null) {
        res.astrologer.image = req.file.path;
    }
    try {
        const updatedAstrologer = await res.astrologer.save();
        res.json(updatedAstrologer);
    }
     
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete an astrologer
router.delete('/:id', getAstrologer, async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Astrologer.findByIdAndDelete(id);
        res.json({ message: 'Deleted Astrologer' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware to get an astrologer by ID
async function getAstrologer(req, res, next) {
    let astrologer;
    try {
        astrologer = await Astrologer.findById(req.params.id);
        if (astrologer == null) {
            return res.status(404).json({ message: 'Cannot find astrologer' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.astrologer = astrologer;
    next();
}

module.exports = router;
