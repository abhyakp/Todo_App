const mongoose = require('mongoose');

module.exports = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect('mongodb://localhost/todo-app', connectionParams);
    console.log('Connected to database');
  } catch (error) {
    console.error('Could not connect to database:', error);
  }
};