var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const history = require('connect-history-api-fallback');
const cors = require('cors');



const apimemo = require('./routes/apimemo');
const apicomments = require('./routes/apicomments');

var app = express();

app.use(history());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/memo', apimemo);
app.use('/api/comment', apicomments);

module.exports = app;
