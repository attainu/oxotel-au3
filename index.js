const express = require('express');
var User = require('./user');
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();
const PORT = 3600;
// app.get('/', (req, res) => {
//   res.send({ message: 'endpoint working' });
// });
app.use(cors());
app.use(bodyParser.json());

//For Sign-In
app.post('/',(req, res) => {
      console.log("Inside post");

        var username = req.body.username;
        var password = req.body.password;
           
     User.findOne({ where: { username: username } }).then(function (user) {
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


    // For Register 

    app.post('/register',(req, res) => {
        console.log("Inside Register");
        User.create({
            username: req.body.username, email: req.body.email, password: req.body.password
          }).then(user => {
            //req.session.user = user.dataValues;
            res.status(200).send({ regSucceess: true })
            }).catch(err => res.status(401).send({ regSucceess: false, errMsg: err }))
        });
        


app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});