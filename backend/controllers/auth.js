const User = require("../models/user");
const { check, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
var expressJwt = require("express-jwt");

exports.signup = (req, res) => {
  const user = new User(req.body);
  const errors = validationResult(req);
  if(!errors.isEmpty()){
      return res.status(422).json({
          error : errors.array()[0].msg
      })
  } 
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: "NOT able to save user in DB"
      });
    }
    res.json(user);
  });
};

exports.signin = (req, res) => {

  const {email, password} = req.body;
  const errors = validationResult(req);
  if(!errors.isEmpty()){
      return res.status(422).json({
          error : errors.array()[0].msg
      })
  } 
  User.findOne({email}, (err, user)=>{
      if (err || !user) {return res.status(400).json({error: "User email does NOT exist"})};

      if (!user.autheticate(password)) {return res.json({ error: "Passowrd and email did NOT match"})};
      //creating cookie token
      var token = jwt.sign({ _id: user._id}, process.env.SECRET);
      //adding token in cookie
      res.cookie("token", token, {expire: new Date() + 999});

      //send response to front end
      const {_id, email, name, role} = user
      return res.json({ token, user : {_id, email, name, role}}
      )
    })
}
exports.signout = (req, res) => {
  res.json({
    message: "User signout"
  });
};