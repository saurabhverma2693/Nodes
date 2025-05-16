const express = require('express');

const authController = require('../controllers/auth');

const router = express.Router();

router.get('/login', authController.getLogin);

router.post('/login', authController.postLogin);

 router.post('/logout', authController.postLogout);
// router.post('/logout', (req, res, next) => {
//   req.session.destroy((err) => {
//     console.log(err);
//     res.redirect('/');
//   });
// });


module.exports = router;