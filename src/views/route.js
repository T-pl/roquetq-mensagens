const express = require('express');
const questionController = require('../controllers/questionController')
const route = express.Router();
const roomController = require('../controllers/roomController')

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page:'create-pass'}))
route.get('/room/:room', (req, res) => res.render("room", ))

// Formato que o formulário de dentro da modal tem que passa a informação
route.post('/question/:room/:question/:action', questionController.index)
route.post('/create-room', roomController.create)
module.exports = route

