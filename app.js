//declaration
var express 		= require('express');
var bodyParser 		= require('body-parser');
var ejs 			= require('ejs');
var exSession 		= require('express-session');
var bodyParser = require('body-parser');
var exValidator 	= require('express-validator');
var cookieParser 	= require('cookie-parser');
var login 			= require('./controllers/login');
var logout 			= require('./controllers/logout');
var admin 			= require('./controllers/admin');
var router 		= express.Router();
var app = express();

//configuration
app.set('view engine', 'ejs');

router.use(express.static('./public'))
app.use(express.static('public'))

//middleware
app.use('/abc', express.static('xyz'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(exSession({secret: 'my top secret value', saveUninitialized: true, resave: false}));
app.use(cookieParser());
app.use(exValidator());

app.use('/login', login);
app.use('/logout', logout);
app.use('/admin', admin);






//server startup
app.listen(3000, function(){
	console.log('server started at 3000!');
});
