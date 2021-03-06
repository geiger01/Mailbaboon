const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (request, accessToken, refreshToken, proflie, done) => {
      const existingUser = await User.findOne({ googleId: proflie.id });
      if (existingUser) {
        done(null, existingUser);
      } else {
        const newUser = await new User({ googleId: proflie.id }).save();
        done(null, newUser);
      }
    }
  )
);
