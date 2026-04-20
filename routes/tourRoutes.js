const express = require('express');

const tourController = require('./../controllers/tourController');

const tourRouter = express.Router();

tourRouter.param ('id' , tourController.checkID); // this is a middleware that will be executed for every request that contains the id parameter in the url (e.g. /api/v1/tours/5) and it will check if the id is valid or not before executing the route handler
tourRouter.route('/').get(tourController.getAllTours).post( tourController.checkBody , tourController.createTour);
tourRouter.route('/:id').get(tourController.getTour).patch(tourController.updateTour).delete(tourController.deleteTour);


module.exports = tourRouter;