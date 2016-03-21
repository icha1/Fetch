var express = require('express');
var router = express.Router();
var Profile = require('../models/Profile');
var ProfileController = require('../controllers/ProfileController');
var controllers = {
	'profile': ProfileController
}

function createErrorResponse(msg){
	return {
		confirmation:'fail',
		message: msg
	}
}

router.get('/:resource/:id', function(req, res, next) {
	var resource = req.params.resource;
	var id = req.params.id;

	var controller = controllers[resource];
	if (controller == null){
		res.json(createErrorResponse('Invalid RESOURCE!'));
		return;
	}

	controller.getById(id, function(err, result){
		if (err){
			res.json(createErrorResponse(err.message));
		    return;
		}

	    res.json({
	    	confirmation:'success',
	    	result: result
	    });

	    return;
	});
});

router.get('/:resource', function(req, res, next) {
	var resource = req.params.resource;

	var controller = controllers[resource];
	if (controller == null){
		res.json(createErrorResponse('Invalid RESOURCE!'));
		return;
	}

	controller.get(req.query, false, function(err, results){
		if (err){
			res.json(createErrorResponse(err.message));
		    return;
		}

	    res.json({
	    	confirmation:'success',
	    	results: results
	    });

	    return;
	});

});

router.post('/:resource', function(req, res, next) {
	var resource = req.params.resource;

	var controller = controllers[resource];
	if (controller == null){
		res.json(createErrorResponse('Invalid Resource'));
		return;
	}

	controller.post(req.body, function(err, result){
		if (err){
			res.json(createErrorResponse(err.message));
		    return;
		}

	    res.json({
	    	confirmation:'success',
	    	result: result
	    });

	    return;
	});

});

module.exports = router;


