const mongoose = require('mongoose');
require('dotenv').config();

// Import models to test
const User = require('./models/User');
const Item = require('./models/Item');

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected!');

    // Optional: example query to check
    User.find()
      .then(users => console.log('Existing users:', users))
      .catch(err => console.log(err))
      .finally(() => mongoose.disconnect());
  })
  .catch(err => console.log('❌ Connection error:', err));
