let UserModel = require('../models/User');

exports.index = (req, res) => {
  let user = req.user;
  res.render('dashboard/index', {user: user});
}

exports.userList = (req, res) => {
  UserModel.findAll().then((data)=> {
      let userList = data;
      res.render('dashboard/userList', {userList: userList});
    }
  )
}
