const Astrologer = require('../models/astrologer');
const multer = require('multer');

// Setting up Multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory to store uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

const getAllAstrologers = async (req, res) => {
    try {
        const filters = {};

        if (req.query.name) {
            filters.name = { $regex: req.query.name, $options: 'i' }; // Case-insensitive regex search
        }
        if (req.query.expertise) {
            filters.expertise = { $regex: req.query.expertise, $options: 'i' }; 
        }
        if (req.query.experience) {
            filters.experience = parseInt(req.query.experience);
        }

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 8;
        const skip = (page - 1) * limit;

        const total = await Astrologer.countDocuments(filters);
        const pages = Math.ceil(total / limit);

        const astrologers = await Astrologer.find(filters).skip(skip).limit(limit);

        res.json({ astrologers, total, page, pages });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getAstrologerById = async (req, res) => {
    res.json(res.astrologer);
};

const createAstrologer = async (req, res) => {
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
};

const updateAstrologer = async (req, res) => {
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
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteAstrologer = async (req, res) => {
    try {
        const { id } = req.params;
        const astrologer = await Astrologer.findByIdAndDelete(id);
        res.json({ message: 'Deleted Astrologer' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getAstrologerMiddleware = async (req, res, next) => {
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
};

module.exports = {
    getAllAstrologers,
    getAstrologerById,
    createAstrologer,
    updateAstrologer,
    deleteAstrologer,
    getAstrologerMiddleware,
    upload
};