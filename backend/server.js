const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const uri  = process.env.ATLAS_URI;

mongoose.connect(uri);
const connection =  mongoose.connection;
connection.once('open',()=>{ console.log("MongoDB database connected")});

app.use(cors());
app.use(express.json());

const exerciseRouter = require( './routes/exercises' );
const userRouter = require('./routes/users');

// Routes middleware
app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);


app.listen(port, () =>{
    console.log(`Server running on http://localhost:${port}/`)
});

