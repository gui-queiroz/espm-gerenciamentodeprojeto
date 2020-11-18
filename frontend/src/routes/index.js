const express = require('express');
const path = require('path');

const router = express.Router();

<<<<<<< Updated upstream
router.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, '../views/teste.html'));
});

router.get('/fazer-pedido', (req, res) => {
  // res.sendFile(path.join(__dirname, '../views/teste.html'));
});

router.get('/finalizar-pedido', (req, res) => {
  // res.sendFile(path.join(__dirname, '../views/teste.html'));
});

router.get('/financeiro', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/financeiro.html'));
});

router.get('/estoque', (req, res) => {
  // res.sendFile(path.join(__dirname, '../views/teste.html'));
});
=======
router.get('/', (req, res) => res.render('index'));
>>>>>>> Stashed changes

module.exports = router;
