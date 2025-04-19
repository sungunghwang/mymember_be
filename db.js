const mongoose = require('mongoose');

const connectDB = async () => {
   try {
      await mongoose.connect(
         'mongodb+srv://eduhsu3:wDwlwvsoKcQfOrlc@member-cluster.bugkz6g.mongodb.net/testdb?retryWrites=true&w=majority&appName=member-cluster'
      );
      console.log('MongoDB 연결 성공');
   } catch (err) {
      console.error('MongoDB 연결 실패:', err);
      process.exit(1);
   }
};

module.exports = connectDB;
