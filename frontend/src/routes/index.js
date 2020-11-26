const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get('/pedidos', (req, res) => res.render('order'));
router.get('/financeiro', (req, res) => res.render('financial'));
router.get('/estoque', (req, res) => res.render('stock'));

module.exports = router;
