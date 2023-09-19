//npm init npm i express mongoose npm i --save-dev dotenv nodemon

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // Use the PORT environment variable or default to 3000

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true,   useUnifiedTopology: true })
.then(()=> {console.log("connected to a db")})
.catch((error) => {
    console.error('Error connecting to the database:', error);
    process.exit(1); // Exit the application on a database connection error
  });

const db = mongoose.connection
db.on('error', (error) => console.error('MongoDB connection error:', error))
db.once('open', () => console.log('Connected to Mongo Database'))

app.use(express.json())

const countriesRouter = require('./routes/countries')
app.use('/countries', countriesRouter)


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  }); 
  