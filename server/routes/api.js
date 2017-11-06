var express = require('express');
var router = express.Router();
//mongodb
var mongojs = require('mongojs');
var db = mongojs('<data-base-details>', ['users, reviews']);


//routes

//Get all visitors
router.get('/users', function(req, res, next){
  db.users.find(function (err, users) {
    if(err){
      res.send(err);
    }
    res.json(users);
  })
});

//Get Single visitor
router.get('/user/:id', function (req, res, next) {
	db.users.findOne({_id:mongojs.ObjectId(req.params.id)}, function(err, user){
			if(err){
				res.send(err);
			}
			res.json(user);
	});
});




//add user
router.post('/user', function(req, res, next){
		var user = req.body;
		if(!user.first_name || !(user.last_name + '') || !(user.phone_number + '') || !(user.appartment_amount + '') || !(user.date_from + '') || !(user.date_to + '')){
				res.status(400);
				res.json({
					"error":"bad data"
				});
		}else{
			db.users.save(user, function(err, user){
						if(err){
				res.send(err);
			}
			res.json(user); 
			});
		}
});

//REVIEWS

//GET ALL REVIEWS
router.get('/reviews', function(req, res, next){
  db.reviews.find(function (err, reviews) {
    if(err){
      res.send(err);
    }
    res.json(reviews);
  })
});

//Get Single REVIEW
router.get('/review/:id', function (req, res, next) {
	db.reviews.findOne({_id:mongojs.ObjectId(req.params.id)}, function(err, review){
			if(err){
				res.send(err);
			}
			res.json(review);
	});
});




//add review
router.post('/review', function(req, res, next){
		var review = req.body;
		if(!review.first_name || !(review.last_name + '') || !(review.reviews + '') || !(review.date_to + '')){
				res.status(400);
				res.json({
					"error":"bad data"
				});
		}else{
			db.reviews.save(review, function(err, review){
						if(err){
				res.send(err);
			}
			res.json(review); 
			});
		}
});

module.exports = router;
