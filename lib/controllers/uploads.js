const { Router } = require('express');
const Upload = require('../models/Upload');
const UploadService = require('../services/UploadService');

module.exports = Router()
.post('/', async (req, res, next) => {
  // OrderService
  //   .create(req.body)
  //   .then(order => res.send(order))
  //   .catch(next);
    try {
    const upload = await UploadService.create(req.body);
    res.send(upload);
    } catch (err) {
        next(err);
    }
});