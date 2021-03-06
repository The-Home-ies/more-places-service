const mongoose = require('mongoose');
// import the route handler

const app = require('./app.js');

const PORT = 3004;

// connect to the listings database
mongoose.connect('mongodb://localhost/listings');

app.listen(PORT, () => {
  console.log(`more places module listening on http://localhost/${PORT}`);
});
