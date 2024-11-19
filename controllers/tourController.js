const axios = require('axios');

// URL của server chứa API tour
const API_URL = 'https://server-node-be8c.onrender.com/api/tours';

// Lấy tất cả các tour
exports.getAllTours = async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/getAll`);
    const tours = response.data.data; // Dữ liệu tour từ API
    res.render('index', { tours });
  } catch (error) {
    console.error('Lỗi khi lấy danh sách tour:', error);
    res.status(500).send('Có lỗi xảy ra!');
  }
};

// Hiển thị form thêm tour
exports.addTourForm = (req, res) => {
  res.render('add-tour');
};

// Thêm tour mới
exports.addTour = async (req, res) => {
  const newTour = req.body;
  try {
    await axios.post(`${API_URL}/`, newTour);
    res.redirect('/tours');
  } catch (error) {
    console.error('Lỗi khi thêm tour:', error);
    res.status(500).send('Có lỗi xảy ra khi thêm tour.');
  }
};

// Hiển thị form chỉnh sửa tour
exports.editTourForm = async (req, res) => {
  const tourId = req.params.id;
  try {
    const response = await axios.get(`${API_URL}/${tourId}`);
    res.render('edit-tour', { tour: response.data });
  } catch (error) {
    console.error('Lỗi khi lấy thông tin tour:', error);
    res.status(500).send('Có lỗi xảy ra khi lấy thông tin tour.');
  }
};

// Chỉnh sửa tour
exports.editTour = async (req, res) => {
  const tourId = req.params.id;
  const updatedTour = req.body;
  try {
    await axios.patch(`${API_URL}/${tourId}`, updatedTour);
    res.redirect('/tours');
  } catch (error) {
    console.error('Lỗi khi cập nhật tour:', error);
    res.status(500).send('Có lỗi xảy ra khi cập nhật tour.');
  }
};

// Xóa tour
exports.deleteTour = async (req, res) => {
  const tourId = req.params.id;
  try {
    await axios.delete(`${API_URL}/${tourId}`);
    res.redirect('/tours');
  } catch (error) {
    console.error('Lỗi khi xóa tour:', error);
    res.status(500).send('Có lỗi xảy ra khi xóa tour.');
  }
};
