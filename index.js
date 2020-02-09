const express = require('express');
var User = require('./user');

const app = express();
const PORT = 3600;
// app.get('/', (req, res) => {
//   res.send({ message: 'endpoint working' });
// });
app.post('/',(req, res) => {
      console.log("Inside post");

        var username = req.body.username,
            password = req.body.password;
           
     User.findAll({ where: { username: username } }).then(function (user) {
            if (!user) {
              
                res.redirect('/');
            } else if (!user.validPassword(password)) {
                res.redirect('/');
            } else {
                req.session.user = user.dataValues;
                res.redirect('/dashboard');
            }
        });
    });
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});