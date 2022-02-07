const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

const Animal = require('./models/Animal');

const app = express();
const db = config.get('mongoURI');

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


const newAnimal = new Animal({
    name: 'Blue Panda',
    isEndangered: true
})

// newAnimal.save().then(item => console.log(item)).catch(err => console.log(err));

Animal.findOneAndUpdate({
    _id: "61fdaee1350903c649c62455"
}, {
    isEndangered: false
}).then(item => console.log(item));

Animal.findOneAndDelete({
    _id: "61fdae52744bd349290ce3c3"
}, {
    isEndangered: false
}).then(console.log('Item deleted'));

Animal.find().sort({ date: -1 }).then(items => console.log(items));