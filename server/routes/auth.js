import express from "express";
import passport from "passport";
import LocalStrategy from "passport-local";
// import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import User from "../models/User.js";

// Creating a new router object from the express module
const router = express.Router();

passport.use(
  new LocalStrategy(function verify(username, password, cb) {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        return cb(err);
      }
      if (!user) {
        return cb(null, false, { message: "Incorrect username or password." });
      }

      // Use bcrypt to compare passwords
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
          return cb(err);
        }

        if (!result) {
          return cb(null, false, {
            message: "Incorrect username or password.",
          });
        }

        return cb(null, user);
      });
    });
  })
);

// Setting up a POST route at /login 
// When this route is hit, the login function imported from auth controller will be executed
router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/",
}));

export default router;

// router.get("/login", (req, res, next) => {
//   res.render("login");
// });

// var express = require('express');
// var passport = require('passport');
// var LocalStrategy = require('passport-local');
// var crypto = require('crypto');
// var db = require('../db'); // database, use mongo instead