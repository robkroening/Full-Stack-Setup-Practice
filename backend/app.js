// setup app
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

// body parsers in app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app listener
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})