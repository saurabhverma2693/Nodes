const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const errorcontroller = require('./controller/error');
// const expressHbs = require('express-handlebars'); // For Handle bars

const app = express();

// app.engine(
//   'hbs',
//   expressHbs({
//     layoutsDir: 'views/layouts/',         // ..................Register Engine For Handle bars
//     defaultLayout: 'main-layout',
//     extname: 'hbs'
//   })
// );
// app.set('view engine', 'hbs');
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorcontroller.get404);

app.listen(5002);
