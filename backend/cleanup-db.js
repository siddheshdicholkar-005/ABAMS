// Connect to your MongoDB (using MongoDB Compass or CLI)
// Drop the entire 'academic_monitoring' database and start fresh

// OR in your backend, add this temporary cleanup script:
// Create a file: /backend/cleanup-db.js
const mongoose = require('mongoose');
require('dotenv').config();

async function cleanupDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    // Drop all collections to start fresh
    await mongoose.connection.db.dropDatabase();
    console.log('Database reset successfully');
    
    process.exit(0);
  } catch (error) {
    console.error('Error cleaning database:', error);
    process.exit(1);
  }
}

cleanupDatabase();
