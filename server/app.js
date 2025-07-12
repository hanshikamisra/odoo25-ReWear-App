// server/app.js
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const itemRoutes = require('./routes/itemRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api/items', itemRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

const app = express();

// ====== Middleware ======
app.use(cors());
app.use(express.json());

// ====== MongoDB Connection ======
const MONGODB_URI = 'mongodb://localhost:27017/rewear'; 

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('---MongoDB connected---'))
.catch(err => console.error('MongoDB connection error:', err));

// ====== Sample Route ======
app.get('/', (req, res) => {
  res.send('ReWear API is running!');
});

// ====== Import and use routes here ======
// Example:
// const itemRoutes = require('./routes/itemRoutes');
// app.use('/api/items', itemRoutes);

// ====== Error Handling ======
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({ message: 'Internal server error' });
});

// ====== Start Server ======
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});
