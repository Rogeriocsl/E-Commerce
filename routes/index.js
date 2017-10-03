var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET page açao. */
router.get('/acao', function(req, res, next) {
  res.render('acao');
});


/* GET New User page. */
router.get('/newuser', function(req, res) {
res.render('newuser', { title: 'Add New User' });
});

/* POST to Add User Service */
router.post('/adduser', function (req, res) {

    var db = require("../db");
    var userName = req.body.username;
    var userEmail = req.body.useremail;
    var userSenha = req.body.usersenha;
    var userConfirmarSenha = req.body.userconfirmarsenha;


    var Users = db.Mongoose.model('dxgames', db.UserSchema, 'dxgames');
    var user = new Users({ username: userName, email: userEmail, senha: userSenha, confirmarsenha: userConfirmarSenha, });
    user.save(function (err) {
        if (err) {
            console.log("Error! " + err.message);
            return err;
        }
        else {
            console.log("Post saved");
            res.redirect("userlist");
        }
    });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
   var db = require("../db");
   var Users = db.Mongoose.model('dxgames', db.UserSchema, 'dxgames');
   Users.find({}).lean().exec(
      function (e, docs) {
         res.render('userlist', { "userlist": docs });
   });
});


/* GET page contato. */
router.get('/contato', function(req, res, next) {
  res.render('contato');
});

/* GET page historia. */
router.get('/historia', function(req, res, next) {
  res.render('historia');
});


/* GET page login. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

/* GET page suporte. */
router.get('/suporte', function(req, res, next) {
  res.render('suporte');
});

/* GET page produto. */
router.get('/produto', function(req, res, next) {
  res.render('produto');
});




module.exports = router;
