const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI =
  'mongodb+srv://Saurabh1:sv2025@cluster0.9jcts4n.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0';

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});
const csrfProtection = csrf();


app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);

app.use(csrfProtection);
app.use(flash());

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      if (!user) {
        return next();
      }
      req.user = user; // ✅ This ensures req.user.name exists
      next();
    })
    .catch(err => {
      console.log(err);
      next(new Error(err));
    });
});
app.use((req,res,next)=>{
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });





// ...................................................................................................................................................
// const path = require('path');

// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const session = require('express-session');
// const MongoDBStore = require('connect-mongodb-session')(session);

// const errorController = require('./controllers/error');
// const User = require('./models/user');

// const MONGODB_URI = 'mongodb+srv://Saurabh1:sv2025@cluster0.9jcts4n.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0'; 

// const app = express();
// const store = new MongoDBStore({
//   uri: MONGODB_URI,
//   collection:'sessions'
// })
// app.set('view engine', 'ejs');
// app.set('views', 'views');

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');
// const authRoutes = require('./routes/auth');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(session({secret:'my secret', resave:false,saveUninitialized:false,store:store}));

// app.use((req, res, next) => {
//   User.findById('6825d1d33a2debb9e06c1cf6')
//     .then(user => {
//       req.user = user;
//       next();
//     })
//     .catch(err => console.log(err));
// });

// // const isAuth = (req, res, next) => {
// //   if (!req.session.isLoggedIn) {
// //     return res.redirect('/login');
// //   }
// //   next();
// // };


// app.use((req, res, next) => {
//   if (!req.session.user) {
//     return next();
//   }
//   User.findById(req.session.user._id)
//     .then(user => {
//       req.user = user;
//       next();
//     })
//     .catch(err => console.log(err));
// });


// // app.use((req, res, next)=>{
// //   if(!req.session.user){
// //     return next();
// //   }
// //  User.findById(req.session.user_id)
// //     .then(user => {
// // req.user = user;
// //       next();
// //     })
// //     .catch(err => console.log(err));
// // });

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);
// app.use(authRoutes);

// app.use(errorController.get404);

// mongoose
//   .connect(
//     MONGODB_URI
//   )
//   .then(result => {
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


// // const path = require('path');

// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const mongoose = require('mongoose');

// // const errorController = require('./controllers/error');
// // // const mongoConnect = require('./util/database').mongoConnect;
// // const User = require('./models/user');

// // const app = express();

// // app.set('view engine', 'ejs');
// // app.set('views', 'views');

// // const adminRoutes = require('./routes/admin');
// // const shopRoutes = require('./routes/shop');

// // app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(express.static(path.join(__dirname, 'public')));

// // app.use((req, res, next) => {
// //   User.findById('6825d1d33a2debb9e06c1cf6')
// //     .then(user => {
// //       req.user = user;
// //       next();
// //     })
// //     .catch(err => console.log(err));
// // });

// // app.use('/admin', adminRoutes);
// // app.use(shopRoutes);

// // app.use(errorController.get404);

// // // mongoConnect(() => {
// // //   app.listen(3000);
// // // });

// // mongoose.connect('mongodb+srv://Saurabh1:sv2025@cluster0.9jcts4n.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0')
// // .then(result => {
// //     User.findOne().then(user => {
// //       if (!user) {
// //         const user = new User({
// //           name: 'Max',
// //           email: 'max@test.com',
// //           cart: {
// //             items: []
// //           }
// //         });
// //         user.save();
// //       }
// //     });
// //     app.listen(3000);
// //   })
// //   .catch(err => {
// //     console.log(err);
// //   });

