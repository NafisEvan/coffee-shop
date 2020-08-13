var express 	= require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');

router.get('/', function(req, res){
	console.log('login page requested!');
	res.render('login/index');
});


router.post('/', function(req, res){

	var user ={
		username: req.body.uname,
		password: req.body.password
	};

	userModel.validateCustomer(user, function(status){
	 	if(status){
	 		res.send('Customer');

		}else{
			userModel.validateEmp(user, function(result){
	 	   if(result.length > 0){
	 		        if(result[0].userType =='admin')
	 		        {
	 		        res.cookie('username', req.body.uname);
                     res.redirect('/admin');
	 		        }
	 		        else
	 		        {
                      res.send('manager/delevery');
	 		        }

		    }else{
			res.send('invalid username/password');
		  }
	});
		}
	});
});


module.exports = router;

