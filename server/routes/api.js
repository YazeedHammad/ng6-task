const express = require('express');
const router = express.Router();
const user = require('../models/user')

const mongoose = require('mongoose')
const db = "mongodb://yazeed:yazeed92@ds159459.mlab.com:59459/ng6db"

mongoose.connect(db, err => {
    if (err) {
        console.error('Error!' + err)
    } else {
        console.log('Connected To MongoDB')
    }
})

router.get('/', (req, res) => {
    res.send('From API Route')
})

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new user(userData);
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(registeredUser)
        }
    })

})

module.exports = router;
