var express    = require('express');
var morgan     = require('morgan');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/postings_api");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('./public'));
app.use(morgan('dev'));

var indexRouter = require('./routes/index');
var postingsRouter = require('./routes/api/postings');

app.use('/', indexRouter);
app.use('/api/postings', postingsRouter);

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log('Im Up');
});
