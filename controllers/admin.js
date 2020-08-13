var express 	= require('express');

var router 		= express.Router();
var userModel   = require.main.require('./models/user-model');


//dash
router.get('/', function(req, res){
	
		userModel.getAllFood(function(results){
			if(results.length > 0){
				res.render('admin/index', {foodlist: results});
			}else{
				res.redirect('/login');
			}
		});
});

//Give Discount
router.get('/give/:id', function(req, res){
	userModel.discount(req.params.id, function(result){
		res.render('admin/discount', {food: result});
	 });
})

router.post('/give/:id', function(req, res){
	
		var food = {
			id: req.params.id,
		    discount: req.body.discount
		};

		userModel.discountById(food, function(status){
			if(status){
             
				res.redirect('/admin/give/'+req.params.id);

			}else{
				res.redirect('/home/index');
			}
		});
});

//ingredient
router.get('/ingredient', function(req, res){	

		res.render('admin/ingredient');
});


//Customer Request

router.get('/request', function(req, res){
	
		userModel.getAllrCustomer(function(results){
			if(results.length > 0){
				res.render('admin/request', {customerlist: results});
			}else{
				res.redirect('/login');
			}
		});
});




//UpdateProfile
router.get('/update', function(req, res){	

		res.render('admin/update');
});


//allemp

router.get('/allemp', function(req, res){
	
		userModel.getAllEmp(function(results){
			if(results.length > 0){
				res.render('admin/allemp', {userlist: results});
			}else{
				res.redirect('/login');
			}
		});
});





//allcustomer


router.get('/allcustomer', function(req, res){
	
		userModel.getAllCustomer(function(results){
			if(results.length > 0){
				res.render('admin/allcustomer', {customerlist: results});
			}else{
				res.redirect('/login');
			}
		});
});



//addadmin
router.get('/addadmin', function(req, res){	

		res.render('admin/addadmin');
});


router.post('/addadmin',function(req, res){
  
	var user = {
		name: req.body.name,
		uname: req.body.uname,
		password: req.body.password,
		email: req.body.email,
		phone: req.body.phone,
		address: req.body.address,
		gender: req.body.gender,
		salary: req.body.salary
		
	};


userModel.validateUsername(user.uname, function(results){


					if(results==null){
							userModel.insertadmin(user, function(status1){
							if (status1) {
								res.redirect('/admin/allemp');
							}else{
								res.send('Add has not been completed');
							}
						})
				       
			     }else{
				
                       res.send('Username already exists');    

			     }
				
				});
})





//addmanager
router.get('/addmanager', function(req, res){	

		res.render('admin/addmanager');
});


router.post('/addmanager',function(req, res){
  
	var user = {
		name: req.body.name,
		uname: req.body.uname,
		password: req.body.password,
		email: req.body.email,
		phone: req.body.phone,
		address: req.body.address,
		gender: req.body.gender,
		salary: req.body.salary
		
	};


userModel.validateUsername(user.uname, function(results){


					if(results==null){
							userModel.insertmanager(user, function(status1){
							if (status1) {
								res.redirect('/admin/allemp');
							}else{
								res.send('Add has not been completed');
							}
						})
				       
			     }else{
				
                       res.send('Username already exists');    

			     }
				
				});
})







//adddelivery
router.get('/adddelivery', function(req, res){	

		res.render('admin/adddelivery');
});


router.post('/adddelivery',function(req, res){
  
	var user = {
		name: req.body.name,
		uname: req.body.uname,
		password: req.body.password,
		email: req.body.email,
		phone: req.body.phone,
		address: req.body.address,
		gender: req.body.gender,
		salary: req.body.salary
		
	};


userModel.validateUsername(user.uname, function(results){


					if(results==null){
							userModel.insertdelivery(user, function(status1){
							if (status1) {
								res.redirect('/admin/allemp');
							}else{
								res.send('Add has not been completed');
							}
						})
				       
			     }else{
				
                       res.send('Username already exists');    

			     }
				
				});
})





//accept customer
router.get('/accept/:id', function(req, res){
	
	userModel.acceptbyId(req.params.id, function(result){
		res.redirect('/admin/request');
	});
})

//reject customer
router.get('/reject/:id', function(req, res){
	
	userModel.rejectbyId(req.params.id, function(result){
		res.redirect('/admin/request');
	});
})

//Delete User
router.get('/delete/:id', function(req, res){
	
	userModel.deletebyId(req.params.id, function(result){
		res.redirect('/admin/allemp');
	});
})


//Update User
router.get('/update/:id', function(req, res){
	userModel.updateById(req.params.id, function(result){
		res.render('admin/updateuser', {user: result});
	 });
})


router.post('/update/:id', function(req, res){
	
		var user = {
			id: req.params.id,
			name: req.body.name,
		    password: req.body.password,
		    email: req.body.email,
		    phone: req.body.phone,
		    address: req.body.address,
		    salary: req.body.salary
		};

		userModel.updateUserById(user, function(status){
			if(status){
             
				res.redirect('/admin/update/'+req.params.id);

			}else{
				res.redirect('/home/updateuser');
			}
		});
});


//Block customer
router.get('/block/:id', function(req, res){
	
	userModel.blockbyId(req.params.id, function(result){
		res.redirect('/admin/allcustomer');
	});
})




module.exports = router;

