const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const astrologersRouter = require('./routes/astrologers');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploaded files

// app.use(metrhodOverride('_method')); 
mongoose.connect('mongodb://127.0.0.1:27017/astrologers');
main().catch(err => console.log(err)); 
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/astrologers');
    console.log("mongo connect done");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.get('/',async (req,res)=>{
    res.send('hello');
})

app.use('/astrologers', astrologersRouter);

app.listen(3000, () => console.log('Server Started'));
