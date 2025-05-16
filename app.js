
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('6825d1d33a2debb9e06c1cf6')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    'mongodb+srv://Saurabh1:sv2025@cluster0.9jcts4n.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Max',
          email: 'max@test.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });


// const path = require('path');

// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// const errorController = require('./controllers/error');
// // const mongoConnect = require('./util/database').mongoConnect;
// const User = require('./models/user');

// const app = express();

// app.set('view engine', 'ejs');
// app.set('views', 'views');

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//   User.findById('6825d1d33a2debb9e06c1cf6')
//     .then(user => {
//       req.user = user;
//       next();
//     })
//     .catch(err => console.log(err));
// });

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);

// app.use(errorController.get404);

// // mongoConnect(() => {
// //   app.listen(3000);
// // });

// mongoose.connect('mongodb+srv://Saurabh1:sv2025@cluster0.9jcts4n.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0')
// .then(result => {
//     User.findOne().then(user => {
//       if (!user) {
//         const user = new User({
//           name: 'Max',
//           email: 'max@test.com',
//           cart: {
//             items: []
//           }
//         });
//         user.save();
//       }
//     });
//     app.listen(3000);
//   })
//   .catch(err => {
//     console.log(err);
//   });

