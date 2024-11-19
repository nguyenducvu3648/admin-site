const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tourController');

// Hiển thị danh sách các tour
router.get('/', tourController.getAllTours);

// Thêm tour
router.get('/add', tourController.addTourForm);
router.post('/add', tourController.addTour);

// Sửa tour
router.get('/edit/:id', tourController.editTourForm);
router.post('/edit/:id', tourController.editTour);

// Xóa tour
router.get('/delete/:id', tourController.deleteTour);

module.exports = router;
