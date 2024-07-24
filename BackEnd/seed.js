const mongoose = require('mongoose');
const Astrologer = require('./models/astrologer');
const astrologers = require('./seed_test_data'); // Assuming the data file is named astrologers.js

mongoose.connect('mongodb://localhost/astrologers', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const seedDB = async () => {
    await Astrologer.deleteMany({});
    await Astrologer.insertMany(astrologers);
    console.log('Database seeded with astrologers!');
    mongoose.connection.close();
};

seedDB();
