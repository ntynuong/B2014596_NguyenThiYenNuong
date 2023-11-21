const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const app = express();
const port = 3000;
const config = require('./app/config/index');
const MongoDB = require("./app/utils/mongodb.util");


const notesRouter = require('./routes/notes.route');
const ordersRouter = require('./routes/order.route');
const cartsRouter = require('./routes/cart.route');
const categorysRouter = require('./routes/category.route');
const productsRouter = require('./routes/product.route');
const usersRouter = require('./routes/user.route');
const loginRouter = require('./routes/login.route');
const registerRouter = require('./routes/register.route');
const ApiError = require('./app/api-error');




async function startServer() {
  try {
    await MongoDB.connect(config.db.uri);
    console.log("Connected to the database!");

    const PORT = config.app.port;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

  } catch (error) {
    console.log("Cannot connect to the database!", error);
    process.exit();

  }
}

startServer();

app.use(express.static(path.join(__dirname, 'public')));


app.use(cors());

// phan tich request of content-type application/json
app.use(express.json());

// phan tich request of content-type application/x-wwww-form-urlencoded
app.use(express.urlencoded({
  extended: true
}));


// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));






app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/register', registerRouter);
app.use('/api/products', productsRouter);
app.use('/api/categorys', categorysRouter);
app.use('/api/carts', cartsRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/notes', notesRouter);


// handle 404 response
app.use((req, res, next) => {
  // code sẽ chạy khi không có route được định nghĩa nào khớp với yêu câu. Gọi next() để chuyển sang middleware xử lý lỗi
  return next(new ApiError(404, 'Resource not found'));
});

// define error-handling middleware last, after other app.use() and routes calls
app.use((error, req, res, next) => {
  // Middleware xử lý lỗi tập trung
  // Trong các đoạn code xử lý ở các route, gọi next(error)
  //  sẽ chuyển về middleware xử lý lỗi này
  return res.status(error.statusCode || 500).json({
    message: error.message || 'Internal Server Error'
  });
});