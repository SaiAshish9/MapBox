const express=require('express');
const router=express.Router()
const volunteerController = require('./../controller/volunteerController');

router
  .route('/volunteers-within/:distance/center/:latlng/unit/:unit')
  .get(volunteerController.getvolunteersWithin);

router.route('/distances/:latlng/unit/:unit').get(volunteerController.getDistances);

module.exports=router
