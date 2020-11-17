const express = require('express');
const path = require('path');

require('dotenv').config();

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(require('./routes'));

app.listen(process.env.PORT || 3000, () => console.log('Frontend ON!'));
