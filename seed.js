const mongoose = require('mongoose');
require('dotenv').config();

const User = require('./models/User');
const Item = require('./models/Item');

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('✅ Connected to DB for seeding');

  // Clear old data
  await User.deleteMany();
  await Item.deleteMany();

  // Create dummy user
  const user = await User.create({
    name: 'Test User',
    email: 'test@example.com',
    password: 'hashedpassword', // In real app, use bcrypt
  });

  // Create dummy item
  await Item.create({
    title: 'Denim Jacket',
    description: 'A classic blue denim jacket',
    images: ['https://example.com/jacket.jpg'],
    category: 'Jacket',
    type: 'Swap',
    size: 'M',
    condition: 'Gently used',
    tags: ['denim', 'casual'],
    owner: user._id,
    isApproved: true,
    isAvailable: true,
  });

  console.log('✅ Seed data inserted');
  mongoose.disconnect();
}

seed();
