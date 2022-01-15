const express = require("express");
const mongoose = require('mongoose');
const coockieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');


mongoose.connect(keys.mongoURI)

const app = express(); 

app.use(
    coockieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.coockieKey]
    })
)

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5001;
app.listen(PORT);
                                                                            