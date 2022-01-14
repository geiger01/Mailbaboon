const express = require("express");
require('./services/passport');

const app = express(); 

require('./routes/authRoutes')(app)

console.log('ads');
const PORT = process.env.PORT || 5001;
app.listen(PORT);
