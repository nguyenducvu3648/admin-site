const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const tourRoutes = require('./routes/tourRoutes');

// Set up view engine (nếu bạn dùng ejs hoặc bất kỳ template engine nào)
app.set('view engine', 'ejs');

// Sử dụng bodyParser để lấy dữ liệu từ form
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Dùng routes cho các API của tour
app.use('/', tourRoutes);

// Serve static files nếu có (CSS, JS, Images, v.v...)
app.use(express.static(path.join(__dirname, 'public')));

// Lắng nghe port
const port = 3000;
app.listen(port, () => {
  console.log(`Server đang chạy trên http://localhost:${port}`);
});
