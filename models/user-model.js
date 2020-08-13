var db = require('./db');

module.exports ={


//login

	validateCustomer: function(user, callback){
		var sql ="select * from customer where username=? and password=?";
		db.getResult(sql, [user.username, user.password], function(results){

			if(results.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},


 validateEmp: function(user, callback){
		var sql ="select * from users where username=? and password=?";
		db.getResult(sql, [user.username, user.password], function(result){

			if(result.length > 0){
				callback(result);
			}else{
				callback(null);
			}
		});
	},



//all Emp
	getAllEmp:function(callback){
		var sql = "select * from users";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},

//all food
	getAllFood:function(callback){
		var sql = "select * from food";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},

	//Give Discount
 discount: function(id, callback){
		var sql = "select * from food where id=?";
		db.getResult(sql, [id], function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	},

//Give Discount By id
 discountById: function(food, callback){
		var sql =  "update food set discount_amount=? where id=?";
		db.execute(sql, [food.discount,food.id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},




//all requested customer
	getAllrCustomer:function(callback){
		var sql = "select * from customer where status=0";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},


//all customer
	getAllCustomer:function(callback){
		var sql = "select * from customer where status=1";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},


//validate Users
	validateUsername: function(uname, callback){
		var sql = "select * from users where username=?";
		db.getResult(sql, [uname], function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},

//insert admin
	insertadmin: function(user, callback){
		var sql = "insert into users values(?,?,?,?,?,?,?,?,?,'image.jpg','admin')";

		db.execute(sql, [null, user.name,user.uname, user.password, user.phone,user.address,user.gender,user.email,user.salary], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},


//insert manager
	insertmanager: function(user, callback){
		var sql = "insert into users values(?,?,?,?,?,?,?,?,?,'image.jpg','manager')";

		db.execute(sql, [null, user.name,user.uname, user.password, user.phone,user.address,user.gender,user.email,user.salary], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
//insert manager
	insertdelivery: function(user, callback){
		var sql = "insert into users values(?,?,?,?,?,?,?,?,?,'image.jpg','delivery_man')";

		db.execute(sql, [null, user.name,user.uname, user.password, user.phone,user.address,user.gender,user.email,user.salary], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},


//customer accept
 acceptbyId: function(id, callback){
		var sql =  "update customer set status=? where id=?";
		db.execute(sql, [1,id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

//customer rejectdeletebyId
 rejectbyId: function(id, callback){
		var sql =  "update customer set status=? where id=?";
		db.execute(sql, [3,id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

	//user deletebyId
 deletebyId: function(id, callback){
		var sql =  "delete from users where id=?";
		db.execute(sql, [id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

	//User Update
 updateById: function(id, callback){
		var sql = "select * from users where id=?";
		db.getResult(sql, [id], function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	},

	updateUserById: function(user, callback){
		var sql = "update users set name=?,password=?,phone=?,address=?,email=?,salary=? where id=?";

		db.execute(sql, [user.name,user.password, user.phone,user.address,user.email,user.salary,user.id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

//customer blockbyId
 blockbyId: function(id, callback){
		var sql =  "update customer set status=? where id=?";
		db.execute(sql, [4,id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}



}