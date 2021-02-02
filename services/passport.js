const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");
//require in the users model class
const User = mongoose.model("users");

//convert the user model instance into an id to be stored in the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// convert the id into an user model instance
//all this auth stuff for:
//this function adds user model instance to the req object (req.user)
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

//tell passport to use google-strategy to kick off the Oauth flow
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      // query to not duplicate user accounts in our database
      const existingUser = await User.findOne({
        googleId: profile.id
      });

      if (existingUser) {
        //A user already exists, don't need to make a new model instance
        done(null, existingUser);
      } else {
        //Make a new user model instance
        const user = await new User({ googleId: profile.id }).save();
        done(null, user);
      }
    }
  )
);
