// setup app
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const mongoose = require('mongoose');

// body parsers in app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// database connection
mongoose.connect('mongodb://localhost:27017/userspracticenov5');

// router setup and app use
const userRouter = require('./routers/userRouter');
app.use('/users', userRouter);

// app listener
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});