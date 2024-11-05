const express = require('express');
const router = express.Router();
const User = require('../models/User');

// get all users
router.get('/', async (req, res) => {
    const allUsers = await User.find();
    res.json(allUsers);
    // res.json('GET ALL USERS ROUTE IS WORKING');
});

// post a single user
router.post('/', async (req, res) => {
    const postedUser = await User.create(req.body);
    res.json(postedUser);
});

// delete a single user
// edit a single user

module.exports = router;